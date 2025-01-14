# LumiControl

Aplicativo mobile em React Native que utiliza o sensor de luz para ajustar o brilho da tela automaticamente ou de forma manual.

## Get create

```bash
   npx create-expo-app@latest lumiControl
   cd lumiControl
   code .
   npm i
```

## Get started

1. Install dependencies

   ```bash
    npm install ou npm i
   ```

2. Start the app

   ```bash
    npx expo start
   ```

Nesse projeto foi utilizado como estratégia de navegação o Expo Router.
   Foi criado no **app** diretório arquivo de index.tsx, notificacao.tsx, configuracao.tsx e _layout.tsx e depois implementado a importação e uso do expo router.

## Configuração de expo sensors

### comando de instalação

```bash
   npx expo install expo-sensors
```
### configuração de permição
   No arquivo **app.json** adicionar :
```bash
   {
      "expo": {
      "plugins": [
         [
         "expo-sensors",
         {
            "motionPermission": "Permitir que o lumiControl acesse os sensores de luminosidade do seu dispositivo"
         }
         ]
      ],
      },
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
