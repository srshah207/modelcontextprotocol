export class ConnectionHandler {
  private connections: Map<string, any> = new Map();

  cleanup() {
    this.connections.clear();
  }
}
