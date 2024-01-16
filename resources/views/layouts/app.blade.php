<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Amber Realty Malaysia specializes in all types of properties including commercial lots, residential">
    <meta name="title" content="Amber Realty">
    <meta name="keywords" content="Amber Realty">

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="Amber Realty">
    <meta itemprop="description" content="Amber Realty Malaysia specializes in all types of properties including commercial lots, residential">
    <meta itemprop="image" content="{{ asset('images/amber_realty_logo.png') }}">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Amber Realty">
    <meta property="og:description" content="Amber Realty Malaysia specializes in all types of properties including commercial lots, residential">
    <meta property="og:image" content="{{ asset('images/amber_realty_logo.png') }}">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Amber Realty">
    <meta name="twitter:description" content="Amber Realty Malaysia specializes in all types of properties including commercial lots, residential">
    <meta name="twitter:image" content="{{ asset('images/amber_realty_logo.png') }}">

    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Amber Realty</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'vuejs/web-app/app.js'])
</head>

<body>
    <div id="app">
        <main>
            <router-view></router-view>
            <!-- @yield('content') -->
        </main>
    </div>
</body>

</html>