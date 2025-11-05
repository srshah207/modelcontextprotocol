export class AuthHandler {
  validateToken(token: string): boolean {
    return token.length > 0 && token.startsWith('Bearer ');
  }
}
