# batch-update.ps1 — applies all common implementation plan changes to remaining HTML files
# Run from the project root. index.html and contact-us.html are already updated manually.

$files = Get-ChildItem -Path . -Filter "*.html" -Recurse |
    Where-Object { $_.FullName -notlike "*node_modules*" } |
    Where-Object { $_.Name -notin @("index.html","contact-us.html") }

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)"
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # 1. Remove blocking analytics from <head> (multiple patterns)
    $content = $content -replace '(?s)<script\s+async\s+src="https://www\.googletagmanager\.com/gtag/js\?id=G-1893RGH1FW">\s*</script>\s*', ''
    $content = $content -replace '(?s)<script>window\.dataLayer=window\.dataLayer\|\|.*?gtag\("config","G-1893RGH1FW"\);</script>\s*', ''
    $content = $content -replace '(?s)<script type="text/javascript">\(function\(c,l,a,r,i,t,y\).*?xwyxun7vj0.*?\);</script>\s*', ''
    # With double-quotes variation
    $content = $content -replace "(?s)<script>window\.dataLayer=window\.dataLayer\|\|.*?gtag\('config','G-1893RGH1FW'\);</script>\s*", ''

    # 2. Update CSS version v4 -> v5
    $content = $content -replace 'style\.css\?v=4\.0\.0', 'style.css?v=5.0.0'

    # 3. Update JS version v4 -> v5  
    $content = $content -replace 'main\.js\?v=4\.0\.0', 'main.js?v=5.0.0'

    # 4. Add skip link after <body> (if not already present)
    if ($content -notmatch 'class="skip-link"') {
        $content = $content -replace '(<body>)', '$1
    <!-- Skip to main content (WCAG 2.4.1) -->
    <a href="#main-content" class="skip-link">Skip to main content</a>'
    }

    # 5. Add dark mode toggle to nav (after the nav-cta button, in nav actions div)
    # Pattern: replace the simple nav actions div that doesn't have theme-toggle
    if ($content -notmatch 'theme-toggle') {
        # For pages with simple nav (no dropdown) - replace the nav action div  
        $content = $content -replace '(<div style="display:flex;align-items:center;gap:12px">)\s*(<a href="\./contact-us\.html" class="nav-cta">)', '<div style="display:flex;align-items:center;gap:10px">
        <button id="theme-toggle" class="theme-toggle" aria-label="Switch to dark mode" title="Toggle dark / light mode"><i class="fa-solid fa-moon" id="theme-icon"></i></button>
        $2'
        # Clean up double div open tag
        $content = $content -replace '<div style="display:flex;align-items:center;gap:12px">\s*<div style="display:flex;align-items:center;gap:10px">', '<div style="display:flex;align-items:center;gap:10px">'
    }

    # 6. Add aria-expanded to mobile menu button (if missing)
    $content = $content -replace '(id="mobile-menu-btn" class="nav-mobile-btn" aria-label="Open Menu")(?!.*aria-expanded)', '$1 aria-expanded="false"'

    # 7. Add deferred analytics before </body> (if not already present)
    if ($content -notmatch 'Google Analytics \(deferred') {
        $deferredScripts = @'

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1893RGH1FW"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1893RGH1FW');</script>
    <script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','xwyxun7vj0');</script>
'@
        $content = $content -replace '(  </body>)', "    <!-- Google Analytics (deferred for performance) -->$deferredScripts`$1"
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "  Done: $($file.Name)"
}

Write-Host "`nAll files updated successfully."
