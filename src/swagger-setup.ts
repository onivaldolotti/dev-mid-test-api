import { OpenAPIObject } from '@nestjs/swagger';

export function swaggerSetup(document: OpenAPIObject): void {
  document.tags = [
    { name: '1. Simple Calculator' },
    { name: '2. Prime Numbers' },
    { name: '3. Factorial' },
    { name: '4. Palindrome' },
    { name: '5. Table' },
    { name: '6. Vowel Counter' },
    { name: '7. Grade Average' },
    { name: '8. Interest Calculation' },
  ];
}
