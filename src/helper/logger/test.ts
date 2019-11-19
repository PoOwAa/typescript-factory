interface LoggerInterface {
  info(msg: string, ctx?: any): void;
}

class A implements LoggerInterface {
  info(msg: string, ctx?: any): void {
    console.log(msg, ctx);
  }
}

class B {
  info(msg: string, ctx?: any): void {
    console.log(msg, ctx);
  }
}

function LoggerFactory<T extends LoggerInterface>(
  name: string,
  type: { new (name: string): T }
) {
  return new type(name);
}

const a = LoggerFactory<A>("classA", A);
const b = LoggerFactory<B>("classB", B);

a.info("Info from A", { k: "v" });
b.info("Info from B", { k: "v" });
