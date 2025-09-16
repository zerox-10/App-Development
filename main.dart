import 'dart:io';

void main() {
  // Take user input
  stdout.write('Enter a number: ');
  String? input = stdin.readLineSync();

  // Convert input to int
  int number = int.parse(input!);

  // Loop from 1 to the entered number and print squares
  for (int i = 1; i <= number; i++) {
    print('Square of $i is ${i * i}');
  }
}
