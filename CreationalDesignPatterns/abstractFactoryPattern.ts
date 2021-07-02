/**
https://www.javatpoint.com/abstract-factory-pattern
Abstract Factory Pattern says that just define an interface or abstract class for creating families of related (or dependent) objects but without specifying their concrete sub-classes.That means Abstract Factory lets a class returns a factory of classes. So, this is the reason that Abstract Factory Pattern is one level higher than the Factory Pattern.

An Abstract Factory Pattern is also known as Kit.

Advantage of Abstract Factory Pattern
- Abstract Factory Pattern isolates the client code from concrete (implementation) classes.
- It eases the exchanging of object families.
- It promotes consistency among objects.
Usage of Abstract Factory Pattern
- When the system needs to be independent of how its object are created, composed, and represented.
- When the family of related objects has to be used together, then this constraint needs to be enforced.
- When you want to provide a library of objects that does not show implementations and only reveals interfaces.
- When the system needs to be configured with one of a multiple family of objects.
 */
/**
 * Designing
Bank class | loan class | loan abstract class
name       | rate       | calculate emi

Abstract Factory
get loan: Loan
get bank: Bank

BankFactory implementing above loan = null
LoanFactory gives Loan object and bank = null

Factory Creator to return an Abstract Factory
Get type from user and return the type of factory they want to implement

*/
abstract class Bank {
	name = '';
	getBankName() {
		return this.name;
	}
}
class HDFC extends Bank {
	name = 'HDFC';
}
class SBI extends Bank {
	name = 'SBI';
}
abstract class Loan {
  rate = 0;
	getRate() {
		return this.rate;
	}
	calculateLoanEMI(amount: number, months: number) {
		const effectiveMonthlyRate = this.rate / 1200;
		return (
			amount *
			effectiveMonthlyRate *
			Math.pow(1 + effectiveMonthlyRate, months) /
			(Math.pow(1 + effectiveMonthlyRate, months) - 1)
		);
	}
}
class HomeLoan extends Loan {
  rate = 10;
}
class EducationLoan extends Loan {
  rate = 12;
}
abstract class AbstractFactory {
  abstract getBank(type: string): Bank | null;
  abstract getLoan(type: string): Loan | null;
}

class BankFactory extends AbstractFactory {
  getBank(type: string) {
    if(type === 'hdfc') {
      return new HDFC();
    }
    if(type === 'sbi') {
      return new SBI();
    }
    return null;

  }
  getLoan(type: string) {
    return null;
  }
}

class LoanFactory extends AbstractFactory {
  getBank(type: string) {
    return null;
  }
  getLoan(type: string) {
    if(type === "home") {
      return new HomeLoan();
    }
    if(type === "edu") {
      return new EducationLoan();
    }
    return null;
  }
}
class CreateFactory {
  getFactory(factoryType:string) {
    if(factoryType === "bank") {
      return new BankFactory();
    }
    if(factoryType === "loan") {
      return new LoanFactory();
    }
    return null;
  }
}

{
  const rate = new CreateFactory().getFactory('loan')?.getLoan("home")?.calculateLoanEMI(100, 12);
  console.log('rate', rate);
}
