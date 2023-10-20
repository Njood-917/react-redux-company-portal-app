export type CompanyType ={
    login :string ,
    id : number , 
    avatar_url:string ,
}

export type SearchCompanyAction ={
    type:'companies/searchCompany';
    payload:number,
  
}