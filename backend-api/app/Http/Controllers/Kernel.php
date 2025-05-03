<?php

namespace App\Http;

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * Bootstrap any application services.
     */
    public function bootstrap(): void
    {
        parent::bootstrap();

        // Tambahan jika kamu perlu menambahkan bootstrappers
    }

    /**
     * Get the application's global HTTP middleware stack.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function globalMiddleware(Application $app): array
    {
        return [
            \Illuminate\Http\Middleware\HandleCors::class, // <-- Middleware CORS aktif di sini
            \App\Http\Middleware\TrustProxies::class,
            \Illuminate\Http\Middleware\ValidatePostSize::class,
            \App\Http\Middleware\TrimStrings::class,
            \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        ];
    }

    /**
     * Get the application's route middleware groups.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function middlewareGroups(Application $app): array
    {
        return [
            'web' => [
                \App\Http\Middleware\EncryptCookies::class,
                \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
                \Illuminate\Session\Middleware\StartSession::class,
                \Illuminate\View\Middleware\ShareErrorsFromSession::class,
                \App\Http\Middleware\VerifyCsrfToken::class,
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
            ],

            'api' => [
                \Illuminate\Routing\Middleware\ThrottleRequests::class,
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
            ],
        ];
    }

    /**
     * Get the application's route middleware.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function routeMiddleware(Application $app): array
    {
        return [
            'auth' => \App\Http\Middleware\Authenticate::class,
            'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        ];
    }
}
