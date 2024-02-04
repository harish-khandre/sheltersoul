import SubmissionCard from "@/components/submission-card";
export default function Submit() {
  <>
    <section
      className="w-full h-[600px] bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className=" flex justify-center items-center h-screen ">
        <SubmissionCard />
      </div>
    </section>
  </>;
}
