
type ServerResponseStatusType = 'success' | 'fail';
export interface ServerResponseDto {
  message: string,
  status: ServerResponseStatusType,
  data?: any
}
