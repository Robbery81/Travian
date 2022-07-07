import { AuthService } from 'src/app/shared/service/auth.service';

export function appInitializer(authService: AuthService) {
  return () =>
    new Promise((resolve) => {
      authService.refreshToken(true).subscribe().add(resolve);
    });
}
