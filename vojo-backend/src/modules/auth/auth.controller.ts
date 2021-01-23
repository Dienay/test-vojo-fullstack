import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { GetUser } from './decorators/get-user.decorator'
import { LoginUserDto } from './dtos/user-login.dto'
import { RegisterUserDto } from './dtos/user-register.dto'

import { IUser } from '@/modules/users/interfaces/user.interface'

@Controller('v3/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('me')
  @UseGuards(AuthGuard())
  async readMe(@GetUser() user: IUser) {
    return { data: user }
  }

  @Post('register')
  async userRegister(@Body() registerUserDto: RegisterUserDto): Promise<object> {
    const user = await this.authService.createUser(registerUserDto)

    return { data: { user } }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async userLogin(@Body() loginUserDto: LoginUserDto): Promise<object> {
    const accessToken = await this.authService.signinUser(loginUserDto)

    return {accessToken}
  }
}