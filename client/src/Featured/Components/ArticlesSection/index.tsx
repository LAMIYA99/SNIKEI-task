import { Heading } from "lucide-react"
import HeadingText from "../../Common/HeadingText"
import ArticlesCards from "../../Common/ArticlesCards"

const ArticlesSection = () => {
  return (
<section className="container mx-auto max-w-[1200px] py-[13px]">
    <HeadingText title="Articles & Resources"/>
<div className="grid grid-cols-4 gap-6 mt-6 ">
<ArticlesCards/>
</div>
</section>
  )
}

export default ArticlesSection