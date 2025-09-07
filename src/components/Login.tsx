import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
  };

  return (
    <div className="w-full h-[640px] absolute top-[1240px] pb-10 left-0 z-10 flex flex-col items-center">
      <div className="max-w-3xl h-full text-center">
        <Title>
          prepare your car for
          <span className="text-[#d62828]"> ultimate speed...</span>
        </Title>
      </div>

      <div className="w-full h-[480px] -mt-10 pt-10">
        <form
          onSubmit={handleSubmit}
          className="w-2/5 h-full shadow shadow-[#d62828]/50 rounded-lg p-10
         flex flex-col gap-10"
        >
          <div className="flex gap-5">
            <div className="w-1/2">
              <Input
                label="first name"
                type="text"
                name="firstName"
                minLength={3}
                maxLength={15}
              />
            </div>
            <div className="w-1/2">
              <Input
                label="last name"
                type="text"
                name="lastName"
                minLength={3}
                maxLength={15}
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-10">
            <Input label="email" type="email" name="email" />
            <Input label="phone" type="tel" name="phone" />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
