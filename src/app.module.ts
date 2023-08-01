import { Module } from '@nestjs/common';
import { FactorialModule } from './factorial/factorial.module';
import { PalindromeModule } from './palindrome/palindrome.module';
import { TableModule } from './table/table.module';
import { InterestModule } from './interest/interest.module';
import { GradeModule } from './grade/grade.module';
import { VowelCounterModule } from './vowel/vowel.module';
import { PrimeModule } from './prime/prime.module';
import { CalculatorModule } from './calculator/calculator.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    CalculatorModule,
    FactorialModule,
    PalindromeModule,
    TableModule,
    InterestModule,
    GradeModule,
    VowelCounterModule,
    PrimeModule,
    SwaggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
