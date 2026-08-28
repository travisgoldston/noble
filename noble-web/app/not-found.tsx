import { Button } from "@/components/Button";
import { cta, paths } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-6 py-28">
      <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
        404
      </p>
      <h1 className="font-serif mt-4 max-w-[12ch] text-5xl tracking-tightest">
        That page is not here.
      </h1>
      <p className="mt-5 max-w-md text-stone">
        The link may be outdated. The homepage is the fastest way back.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/">Back to home</Button>
        <Button href={paths.contact} variant="secondary">
          {cta.primary}
        </Button>
      </div>
    </section>
  );
}
