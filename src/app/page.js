import LoginForm, { CardWithForm } from "./Components/LoginForm/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Welcome To CheckInOut</p>
      <LoginForm />
    </main>
  );
}