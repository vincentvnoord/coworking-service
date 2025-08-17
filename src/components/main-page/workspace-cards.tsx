import Link from "next/link"
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const WorkspaceCards = () => {

  return (
    <div className="w-full text-lg pt-32 max-w-screen-xl flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Flexible Workspaces for Every Need</h2>
        <Link
          className="flex items-center gap-2 text-primary-400 font-medium"
          href={"/workspaces"}>
          <span>
            VIEW ALL
          </span>

          <ChevronRight size={16} className="text-primary-500" />
        </Link>
      </div>
      <div className="flex gap-6">
        <WorkspaceCard
          title="Hot Desks"
          description="Drop in, plug in, and get to work -- perfect for flexible schedules and solo focus."
          image="/images/hot-desks.webp"
          href="hot-desk"
        />
        <WorkspaceCard
          title="Dedicated Desks"
          description="Your personal workstation with storage, ideal for daily use and consistency."
          image="/images/dedicated-desks.webp"
          href="dedicated-desk"
        />
        <WorkspaceCard
          title="Private Offices"
          description="Enclosed, secure spaces for teams or individuals who need privacy and quiet."
          image="/images/private-offices.webp"
          href="private-office"
        />
      </div>
    </div>
  )
}

const WorkspaceCard = ({ title, description, image, href }: { title: string, description: string, image: string, href: string }) => {

  return (
    <div className="w-full bg-gray-1 rounded-lg p-6 flex flex-col gap-2">
      <Image
        src={image}
        alt={title + " workspace"}
        width={400}
        height={800}
        className="w-full h-86 object-cover rounded-lg mb-4"
      />

      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link href={"/workspaces/" + href} className="border-primary-200 border-2 w-fit p-2 rounded-full px-6 self-end mt-2 font-medium text-primary-500 hover:underline">
        Learn more
      </Link>
    </div>
  )
}
