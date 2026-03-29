export interface IAddress {
  id: string;
  idUser: string;
  nameAddress: string;
  phone: string;
  addressDetail: string;
  district: string;
  city: string;
  isDefault: boolean;
  isActive: boolean;
}

export interface IBodyPostAddress {
  nameAddress: string;
  phone: string;
  addressDetail: string;
  district: string;
  city: string;
  isDefault: boolean;
}

export interface IBodyPatchAddress extends IBodyPostAddress {
  id:string;
  isDefault: boolean;
}
