import { type FastifyReply, type FastifyRequest } from 'fastify';

import {
  type UserLoginRequestDto,
  type UserLoginResponseDto,
  type UserRegisterRequestDto
} from './types.js';

type AuthController = {
  login: (
    _request: FastifyRequest<Record<'Body', UserLoginRequestDto>>,
    _reply: FastifyReply
  ) => Promise<UserLoginResponseDto>;
  register: (
    _request: FastifyRequest<Record<'Body', UserRegisterRequestDto>>,
    _reply: FastifyReply
  ) => Promise<UserLoginResponseDto>;
  getUser: (
    _request: FastifyRequest<Record<'Body', UserLoginRequestDto>>
  ) => void;
};

export { type AuthController };
