export class VoidData extends Error{

    constructor(message:string){
        super(message);
    }

}

export class PagesError extends Error{
    public validateError;
  
    constructor(message:string, validateError:{}){

        super(message);
        this.validateError = validateError
    }
}