import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from "./interfaces/customer-protocol";

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  fistName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(fistName: string, lastName: string, cpf: string) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = "";
  }

  getName(): string {
    return this.fistName + " " + this.lastName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
