<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Offline</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/css/fallback.css">
</head>
<body>

    <main>
    
        <section id="fallback">

            <img width="192" height="192" src="/images/pwa-logo-small.webp" alt="app logo"/>

            <h1> Area not available offline..</h1>

            <button id="go-back">Go back</button>

        </section>

    </main>

    <script>

        document.getElementById("go-back").addEventListener("click", () => {

            history.back();
        });

    </script>

</body>
</html>