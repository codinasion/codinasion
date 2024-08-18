import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Join our Open-Source Community
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Collaborate with passionate developers, contribute to
                  cutting-edge projects, and grow your skills in a supportive
                  environment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://github.com/codinasion"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  target="_blank"
                >
                  Join Now
                </Link>
                <Link
                  href="https://github.com/codinasion/codinasion"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  target="_blank"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/logo.svg"
              width="512"
              height="512"
              alt="Codinasion Logo"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last lg:aspect-square hidden lg:block"
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover the Benefits
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our open-source community offers a wealth of opportunities for
                developers to learn, grow, and make a meaningful impact.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Collaborative Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Engage with a diverse community of developers and learn
                      from their experiences and expertise.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Skill Development</h3>
                    <p className="text-muted-foreground">
                      Contribute to real-world projects and build your
                      portfolio, enhancing your technical skills.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Open Innovation</h3>
                    <p className="text-muted-foreground">
                      Collaborate on cutting-edge technologies and be part of
                      the open-source movement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Link
              href="https://github.com/codinasion/codinasion/graphs/contributors"
              target="_blank"
            >
              <Image
                src="/contributors.svg"
                width="512"
                height="512"
                alt="Contributors Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center lg:order-last hidden lg:block"
                priority
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Meet the Community
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Active Contributors
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our open-source community is powered by passionate developers
                who contribute their time and expertise to various projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/harshraj8843.png" />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Harsh Raj</div>
                <div className="text-sm text-muted-foreground">Maintainer</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/victoriacheng15.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Victoria Cheng</div>
                <div className="text-sm text-muted-foreground">
                  Core Team Member
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/0ME9A.png" />
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Baliram Singh</div>
                <div className="text-sm text-muted-foreground">
                  Core Team Member
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/anandfresh.png" />
                <AvatarFallback>AKS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Anandha Krishnan S</div>
                <div className="text-sm text-muted-foreground">
                  Core Team Member
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/hi-Kartik2004.png" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Kartikeya Saini</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/RiteshK-611.png" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Ritesh Kokam</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/grraghav120.png" />
                <AvatarFallback>RG</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Raghav Garg</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/isyuricunha.png" />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Yuri</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/brundabharadwaj.png" />
                <AvatarFallback>BMB</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Brunda M Bharadwaj</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/tanishq-singh-2407.png" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Tanishq Singh</div>
                <div className="text-sm text-muted-foreground">Team Member</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/esivakumar26.png" />
                <AvatarFallback>SKE</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">Siva Kumar Edupuganti</div>
                <div className="text-sm text-muted-foreground">Contributor</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="https://github.com/joao-vitor-souza.png" />
                <AvatarFallback>JV</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-lg font-medium">João Vitor</div>
                <div className="text-sm text-muted-foreground">Contributor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
