import config from '@config/app.config';
import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('GradeLib API')
  .setDescription(
    'GradeLib - system for organizing journals and managing the educational process for educational institutions',
  )
  .setVersion('1.0.0')
  .addBearerAuth()
  .addServer(`http://localhost:${config.port}`, 'Development server')
  .build();
