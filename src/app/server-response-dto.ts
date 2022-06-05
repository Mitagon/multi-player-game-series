type ServerResponseType = 'fail' | 'success';
export interface ServerResponseDto {
  status: ServerResponseType,
  message: string;
  data: any;
}
