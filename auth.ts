export class AuthHandler {
  validateToken(token: string): boolean {
    if (!token || typeof token !== 'string') return false;
    return token.length > 0 && token.startsWith('Bearer ');
  }
}
