export interface CreateGameDto {
  name: string;
  description: string;
  rules: string;
  maximumPlayers: number;
  avi: File
}
