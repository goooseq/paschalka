const userModel = require('../models/user-model');
const mailService = require('./mail-service');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');
class UserService {
    async registration(email, password) {
        const candidate = await userModel.findOne({ email });
        if (candidate) {
            throw new Error('Пользователь уже зарегистрирован');
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await userModel.create({ email, password: hashPassword, activationLink });
        
        for(let i=0; i<1000; i++){
            await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }
    async activate(activationLink){
      const user = await userModel.findOne({activationLink});
      if(!user){
        throw new Error("Некорректная ссылка")
      }
      user.isActivated = true;
      await user.save()
    }
    async login(email, password){
      const user = await  userModel
    }
}
module.exports = new UserService();