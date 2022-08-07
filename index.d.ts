export declare class Emitter {
  on(event: string, callback: Function): this
  emit(event: string, arg: any): this
}

declare function nanoEmitter(): Readonly<Emitter>


declare const emitter: nanoEmitter;

export default emitter;
export default nanoEmitter;
