interface IMessage {
  _id: number;
  text?: string;

  // files: Array<File>;
  files?: Array<string>;
}

export class Message implements IMessage {
  constructor(
    public _id: number,
    public text?: string,
    public files?: Array<string>
  ) {}
}
