<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>6B Notes App</title>
        <meta name="description" content="A Note Taking App">
        <meta name="keywords" content="Notes 6B">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <title>6B Notes App</title>
        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="http://notes.williammaddicott.com">
        <meta property="og:type" content="website">
        <meta property="og:title" content="6B Notes App">
        <meta property="og:description" content="A Note Taking App">
        <meta property="og:image" content="/images/6b.jpg">
        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="notes.williammaddicott.com">
        <meta property="twitter:url" content="http://notes.williammaddicott.com">
        <meta name="twitter:title" content="6B Notes App">
        <meta name="twitter:description" content="A Note Taking App">
        <meta name="twitter:image" content="/images/6b.jpg">
    </head>
    <body>
        <div id="root">
        </div>

        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
