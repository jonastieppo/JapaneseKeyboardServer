# Criação dos módulos, controladores, e serviços básicos da API

* Hiragana
* Katakana

```bat
nest g module hiragana
```

# Conexão com o banco de dados PostGresSQL

```ts
@Module({
  imports: [ TypeOrmModule.forRoot({
    type:  'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'JapaneseKeyBoardServer',
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
```
# Criação das entidades Hiragana e Katakana (dentro de cada módulo)

```ts
//./katakana/katakana.entity.ts
@Entity()
export class Katakana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  YomiKata: string;

  @Column({
    unique : true
  })
  Kana: string;

}
```

```ts
//./hiragana/hiragana.entity.ts
@Entity()
export class Hiragana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  YomiKata: string;

  @Column({
    unique : true
  })
  Kana: string;
}
```

# Adicionar a entidade no app.module

```ts
@Module({
  imports: [ TypeOrmModule.forRoot({
    type:  'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'JapaneseKeyBoardServer',
    entities: [Hiragana,Katakana],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})

```

# Prover a entidade dentro de cada módulo

```ts
@Module({
  imports: [TypeOrmModule.forFeature([Katakana])],  
  providers: [KatakanaService],
  controllers: [KatakanaController]
})
export class Katakana {}

```

# Injetar nos respectivos serviços os repositórios das entidades:

```ts
    constructor(
        @InjectRepository(Katakana)
        private katakanaRepository: Repository<Katakana>,
      ) {}
```

# Implementar a classe KanaServiceTemplate, com métodos de Obter todos os kanas, e adicionar


# Implementar os métodos em Hirana, e katakana

# Implementar os controladores

# Refatorar o código e criar um KanaControllerTemplate

# Criar um pipe de validação para o Schema

## Instalação do JOI

```bat
$ npm install --save joi
$ npm install --save-dev @types/joi
```

## Criação de uma classe que implementa PipeTransform , e recebe um Schema e valida:

```ts
@Injectable()
export class JoiValidationPipe<KanaType> implements PipeTransform {
  constructor(private schema: KanaType) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
```

# Usando o esquema de validação

+ Criar uma instância de JoiValidationPipe
+ Passar como argumento ao construtor da classe o schema a ver validade
+ Ligar o pipe ao método utilizando @UsePipes

# Adicionar filtro de excessão global

# Adicionar o JMDict

# Adicionar um interceptador para transformar o output do JMDict

## Aplicar o map do rxjs para filtar as Words[] só com kanji e strings com 1 elemento

```ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}
```

# Aplicamos o decorador no nível de método