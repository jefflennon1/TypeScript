interface techObject{
  title: string,
  description: string,
  techs: number,
}

interface CreateUserData{
  username?: string,
  email: string,
  password: string,
  tech: Array<string | techObject>
}

export default function CreateUser({username, email, password}: CreateUserData){
    const user = {
      username,
      email, 
      password
    }

    return user;
}