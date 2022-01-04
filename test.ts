// 변수

// 원시타입
const num: number = 123;
const str: string = 'string';
const tru: boolean = true;
let assdf : any = 'asdf';
// 원시값
const nul: null = null;
const undef: undefined = undefined;

//배열

const numberArray: number[] = [1, 2, 3];
const stringArray: Array<string> = ['d', 'o', 'g', 'e'];
const strarr : string[] = ['123','123']

let b : (a:number,b:number) => number
// 람다식을 사용할 때에 이런식으로 타입을 지정해줄수도있음
b = (c,d) => {
    return 1234
}
console.log(b(123,12345))
const a = (a : number , b : any) : void =>{
    console.log(1234)
}
// void는 리턴값이 없음
// 람다식을 사용할때는 이런식으로 사용이 가능함