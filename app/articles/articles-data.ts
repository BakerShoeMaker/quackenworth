export interface AppPromo {
  href: string;
  appName: string;
  appIconSrc: string;
  appIconAlt: string;
  tagline: string;
  description: string;
  videoSrc?: string;
  images?: { src: string; alt: string; caption: string }[];
  ctaLabel: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string; // ISO format: "YYYY-MM-DD"
  excerpt: string;
  content: string; // HTML string
  tags?: string[];
  heroImage?: { src: string; alt: string };
  appPromo?: AppPromo;
}

export const articles: Article[] = [
  {
    slug: "multiplication-patterns-kids-should-learn-first",
    title: "Multiplication Patterns Kids Should Learn First",
    date: "2026-04-23",
    excerpt:
      "Multiplication becomes much easier when children begin to notice patterns instead of seeing every fact as something completely separate to memorize.",
    tags: ["Multiplication", "Math", "Parents", "Teachers", "Grades 2–5"],
    heroImage: {
      src: "/multiplication 3 x 4.png",
      alt: "Illustrated array of 12 apples arranged in 3 rows and 4 columns showing 3 × 4 = 12",
    },
    appPromo: {
      href: "/apps/time-to-multiply",
      appName: "Time to Multiply",
      appIconSrc: "/time-to-multiply.png",
      appIconAlt: "Time to Multiply app icon",
      tagline: "Build multiplication fact fluency — fast.",
      description:
        "Time to Multiply helps children practice the patterns that matter most — skip-counting, commutative pairs, and harder facts that need extra repetition. A one-time purchase, no subscription required.",
      videoSrc: "/promo-time-to-multiply-video.mp4",
      images: [
        {
          src: "/time-to-multiply-4.jpg",
          alt: "Instant feedback shown after answering in Time to Multiply",
          caption: "Instant Feedback",
        },
        {
          src: "/time-to-multiply-2.jpg",
          alt: "Multiplication grid view in Time to Multiply",
          caption: "Visual Grid Learning",
        },
        {
          src: "/time-to-multiply-5.jpg",
          alt: "Progress and results tracking in Time to Multiply",
          caption: "Track Progress",
        },
      ],
      ctaLabel: "Learn More About Time to Multiply",
    },
    content: `
      <p>Multiplication becomes much easier when children begin to notice <strong>patterns</strong> instead of seeing every fact as something completely separate to memorize.</p>
      <p>That is one of the most important ideas in multiplication learning: children build fluency faster when they can spot structure, use known facts to figure out unknown ones, and understand how multiplication works visually and numerically. Research and instructional guidance both support this approach. (<a href="https://pubs.nctm.org/downloadpdf/journals/mtlt/113/9/article-p751.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>

      <h2>Why patterns matter in multiplication</h2>
      <p>Many children are first taught multiplication as a list of facts to memorize. But strong multiplication learning usually develops in stages:</p>
      <ul>
        <li>children notice repeated groups</li>
        <li>they learn skip-counting and equal-group patterns</li>
        <li>they use properties like commutativity and distributivity</li>
        <li>over time, these patterns support faster recall</li>
      </ul>
      <p>This matters because not all multiplication facts are equally hard. Research shows a <strong>problem-size effect</strong>: facts with larger numbers are generally slower and more error-prone than facts with smaller numbers. Researchers also describe a <strong>five effect</strong> and a <strong>tie effect</strong>, meaning that facts involving 5 and square facts like 6 × 6 are often easier than nearby facts. (<a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00740/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</p>

      <h2>Pattern 1: Skip-counting patterns</h2>
      <p>The first multiplication patterns many children notice are skip-counting patterns:</p>
      <ul>
        <li>2s: 2, 4, 6, 8, 10...</li>
        <li>5s: 5, 10, 15, 20...</li>
        <li>10s: 10, 20, 30, 40...</li>
      </ul>
      <p>These are useful because they connect multiplication to skills children often learn earlier, especially counting by equal intervals. That helps explain why facts involving 2, 5, and 10 are usually easier than facts involving 7 or 8. (<a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00740/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</p>
      <p>Skip-counting is a great starting point, but it is not the whole story. Children also need to move beyond counting and begin seeing multiplication as groups, arrays, and relationships between facts. (<a href="https://pubs.nctm.org/downloadpdf/journals/mtlt/113/9/article-p751.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>

      <h2>Pattern 2: Turn-around facts</h2>
      <p>One of the most powerful multiplication patterns is the <strong>commutative property</strong>:</p>
      <ul>
        <li>3 × 7 = 7 × 3</li>
        <li>4 × 6 = 6 × 4</li>
        <li>8 × 5 = 5 × 8</li>
      </ul>
      <p>This means children do not have to treat both versions as completely different facts. Once they know one, they can use it to solve the other. That reduces the number of facts they need to learn and helps them see multiplication as a connected system rather than a long list. NCTM guidance specifically highlights the commutative property as a core step in multiplication fluency. (<a href="https://pubs.nctm.org/downloadpdf/journals/tcm/21/9/article-p548.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>

      <h2>Pattern 3: Arrays and rows-and-columns structure</h2>
      <p>Arrays help children <em>see</em> multiplication:</p>
      <ul>
        <li>3 × 4 means 3 rows of 4</li>
        <li>4 × 3 means 4 rows of 3</li>
      </ul>
      <p>This visual structure is one of the strongest ways to build understanding. Research and teaching guidance both point to arrays as a meaningful model for multiplication because they make equal groups, rows, columns, and turn-around facts visible. (<a href="https://pubs.nctm.org/downloadpdf/journals/mtlt/113/9/article-p751.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>
      <p>Arrays are especially helpful when children stop counting one by one and begin noticing the groups. That is when multiplication starts to feel organized and predictable.</p>

      <h2>Pattern 4: Friendly facts and derived facts</h2>
      <p>Children do not need to know every hard fact immediately. They can use easier facts as stepping stones.</p>
      <p>Examples:</p>
      <ul>
        <li>6 × 7 = 5 × 7 + 7</li>
        <li>7 × 8 = 5 × 8 + 2 × 8</li>
        <li>8 × 6 = 3 × 6 + 3 × 6</li>
      </ul>
      <p>This is the <strong>distributive property</strong> in action. It allows children to break harder facts into smaller facts they already know. NCTM materials specifically highlight the distributive property as a major part of multiplication understanding in the elementary grades. (<a href="https://pubs.nctm.org/downloadpdf/journals/tcm/21/9/article-p548.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>
      <p>This is one of the most useful patterns in multiplication because it helps children bridge from understanding to fluency.</p>

      <h2>Pattern 5: Square facts as anchor facts</h2>
      <p>Some multiplication facts naturally act as anchors:</p>
      <ul>
        <li>3 × 3</li>
        <li>4 × 4</li>
        <li>6 × 6</li>
        <li>7 × 7</li>
      </ul>
      <p>Research describes a <strong>tie effect</strong>, where square facts are often easier to answer than nearby non-square facts. Once a child knows 7 × 7, that fact can help with 7 × 8 or 6 × 7. (<a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00740/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</p>
      <p>These square facts are useful because they can serve as "helper facts" for harder problems.</p>

      <h2>Pattern 6: Bigger numbers are usually harder</h2>
      <p>This pattern is not a trick, but it is one of the most important findings in multiplication research: <strong>larger facts tend to be harder</strong>.</p>
      <p>Facts like 2 × 4 or 3 × 5 are usually easier than facts like 7 × 8 or 8 × 9. This is known as the <strong>problem-size effect</strong>, and it appears consistently in multiplication research. (<a href="https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2013.00189/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</p>
      <p>This helps explain why many children learn the 2s, 5s, and 10s early but need much more practice with the 6s, 7s, 8s, and 9s.</p>

      <h2>Are number tricks and chart patterns useful?</h2>
      <p>There are also many "fun" multiplication-table patterns:</p>
      <ul>
        <li>even numbers always creating even products in some cases</li>
        <li>repeating ones-digit cycles</li>
        <li>digital-root tricks</li>
        <li>visual symmetry in multiplication charts</li>
      </ul>
      <p>These can be interesting, but they are usually less important instructionally than the big patterns children actually use to build fluency: skip-counting, commutativity, arrays, square facts, and distributive reasoning. (<a href="https://pubs.nctm.org/downloadpdf/journals/tcm/21/9/article-p548.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</p>

      <h2>What parents and teachers should focus on first</h2>
      <p>The most useful multiplication patterns for children are:</p>
      <ol>
        <li><strong>2s, 5s, and 10s skip-counting patterns</strong></li>
        <li><strong>turn-around facts</strong></li>
        <li><strong>arrays and equal groups</strong></li>
        <li><strong>square facts like 6 × 6 and 7 × 7</strong></li>
        <li><strong>derived facts using known facts to solve harder ones</strong></li>
      </ol>
      <p>These patterns help children build both understanding and speed.</p>

      <h2>Why this matters for Time To Multiply</h2>
      <p>A strong multiplication app should do more than ask random facts over and over. It should help children notice structure.</p>
      <p>That means supporting:</p>
      <ul>
        <li>easier pattern-based facts first</li>
        <li>repeated exposure to commutative pairs</li>
        <li>visual understanding through grouped structure</li>
        <li>harder facts through derived-fact reasoning</li>
        <li>extra practice on large facts that usually need more repetition</li>
      </ul>
      <p>When children see multiplication as a pattern-rich system, practice becomes more meaningful and much less frustrating.</p>

      <h2>Sources</h2>
      <ol>
        <li><strong>National Council of Teachers of Mathematics (NCTM)</strong>, <em>Using Arrays for Meaningful Multiplication</em>. Emphasizes row-column structure, arrays, and meaningful multiplication models. (<a href="https://pubs.nctm.org/downloadpdf/journals/mtlt/113/9/article-p751.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</li>
        <li><strong>National Council of Teachers of Mathematics (NCTM)</strong>, <em>Three Steps to Mastering Multiplication Facts</em>. Highlights skip counting, commutative property, and distributive property in multiplication fluency. (<a href="https://pubs.nctm.org/downloadpdf/journals/tcm/21/9/article-p548.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</li>
        <li><strong>National Council of Teachers of Mathematics (NCTM)</strong>, <em>The Distributive Property in Grade 3?</em> Supports early use of the distributive property in multiplication understanding. (<a href="https://pubs.nctm.org/downloadpdf/journals/tcm/19/8/article-p498.pdf" target="_blank" rel="noopener noreferrer">NCTM</a>)</li>
        <li><strong>NCTM</strong>, <em>Focusing on Multiplication and Division</em>. Discusses the commutative property and area model as central multiplication ideas. (<a href="https://www.nctm.org/Handlers/AttachmentHandler.ashx?attachmentID=9oj%2BMYeR0tY%3D" target="_blank" rel="noopener noreferrer">nctm.org</a>)</li>
        <li><strong>Huber et al.</strong>, <em>On the interrelation of multiplication and division in secondary school children</em>, <em>Frontiers in Psychology</em> (2013). Summarizes the problem-size effect, tie effect, and five effect. (<a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00740/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</li>
        <li><strong>Jay et al.</strong>, <em>Game-Based Training to Promote Arithmetic Fluency</em>, <em>Frontiers in Education</em> (2019). Reviews multiplication fact networks and common effects such as problem size, five effect, and tie effect. (<a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2019.00118/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</li>
        <li><strong>Prado et al.</strong>, <em>The neural bases of the multiplication problem-size effect</em>, <em>Frontiers in Human Neuroscience</em> (2013). Supports the claim that larger multiplication facts are harder than smaller ones. (<a href="https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2013.00189/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</li>
        <li><strong>Van Beek et al.</strong>, <em>The arithmetic problem size effect in children</em>, <em>Frontiers in Human Neuroscience</em> (2014). Extends the problem-size effect evidence to children. (<a href="https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2014.00756/full" target="_blank" rel="noopener noreferrer">Frontiers</a>)</li>
        <li><strong>Fyfe et al.</strong>, <em>Relations between patterning skill and differing aspects of early mathematics knowledge</em>, PMC. Supports the broader connection between patterning ability and early math development. (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9914987/" target="_blank" rel="noopener noreferrer">PMC</a>)</li>
      </ol>
    `,
  },
  {
    slug: "classroom-friendly-way-to-build-multiplication-fluency",
    title: "A Classroom-Friendly Way to Build Multiplication Fluency",
    date: "2026-03-28",
    excerpt:
      "Time to Multiply gives teachers a simple, flexible way to support multiplication fact practice during the school day — perfect for math centers, intervention, independent work, and early finishers.",
    tags: ["Teachers", "Multiplication", "Math Centers", "Grades 2–4"],
    heroImage: {
      src: "/teacher working with students.png",
      alt: "Elementary school teacher working with two students at a math center",
    },
    appPromo: {
      href: "/apps/time-to-multiply",
      appName: "Time to Multiply",
      appIconSrc: "/time-to-multiply.png",
      appIconAlt: "Time to Multiply app icon",
      tagline: "Build multiplication fact fluency — fast.",
      description:
        "Time to Multiply is designed for elementary classrooms. Timed drills, visual grids, and instant feedback help students in grades 2–4 build fact fluency at their own pace — with no complicated setup required.",
      videoSrc: "/promo-time-to-multiply-video.mp4",
      images: [
        {
          src: "/time-to-multiply-4.jpg",
          alt: "Instant feedback shown after answering in Time to Multiply",
          caption: "Instant Feedback",
        },
        {
          src: "/time-to-multiply-5.jpg",
          alt: "Progress and results tracking in Time to Multiply",
          caption: "Track Progress",
        },
        {
          src: "/time-to-multiply-2.jpg",
          alt: "Multiplication grid view in Time to Multiply",
          caption: "Visual Grid Learning",
        },
      ],
      ctaLabel: "Learn More About Time to Multiply",
    },
    content: `
      <p>Time to Multiply gives teachers a simple, flexible way to support multiplication fact practice during the school day. Whether you need a center activity, an intervention tool, an option for independent practice, or something meaningful for early finishers, it helps students get the focused repetition they need without adding extra complexity to your routine.</p>
      <p>Designed for quick practice and easy use, it fits naturally into elementary classrooms where time is limited and students need consistent fluency support.</p>

      <h2>Use Time to Multiply During Math Centers</h2>
      <p>Math centers work best when students can stay focused and work with minimal teacher help. Time to Multiply fits well into a center rotation because students can jump right into multiplication practice with a clear task and a consistent routine.</p>
      <p>It can be used as a dedicated fluency station alongside teacher-led instruction, partner work, manipulatives, or written practice. Students can work on individual multiplication facts or practice a mix of facts, depending on the goal of the lesson.</p>
      <p>That makes center time more purposeful. Instead of using extra practice as filler, students spend those minutes strengthening multiplication recall in a way that is structured, engaging, and easy to manage.</p>

      <h2>Great for Intervention and Independent Practice</h2>
      <p>Some students need targeted support with specific fact families. Others simply need more repetition and confidence. Time to Multiply works well for both.</p>
      <p>During intervention, teachers can use it with small groups or individual students who need extra practice with multiplication fluency. The focused format helps keep practice manageable, while giving students repeated exposure to the skills they need most.</p>
      <p>It also works well for independent practice. Students can work on their own without needing a complicated setup, which makes it easier to support different learning levels within the same classroom. While one group receives direct instruction, other students can stay productive with meaningful multiplication practice.</p>

      <h2>Use This During Early Finisher Time</h2>
      <p>Early finisher time can be difficult to plan well. Teachers want students to stay engaged, but they also need activities that are easy to start and still academically valuable.</p>
      <p>Time to Multiply gives students a productive way to use those extra minutes. Instead of turning to filler activities, students can continue strengthening multiplication facts in short, focused sessions.</p>
      <p>Because the app is easy to use and does not require extensive setup, it works especially well when students finish an assignment early and need something worthwhile to do right away.</p>

      <h2>Quick Multiplication Fluency Support for Grades 2–4</h2>
      <p>In grades 2 through 4, multiplication fluency plays an important role in later math success. Students need regular opportunities to build speed, accuracy, and confidence with facts so they are prepared for more advanced math concepts.</p>
      <p>Time to Multiply provides quick support that fits those grade levels well. It can help introduce multiplication practice in grade 2, reinforce core fact fluency in grade 3, and give extra review in grade 4 for students who still need practice.</p>
      <p>Because sessions can be short and focused, teachers can work multiplication fluency into the day without sacrificing larger instructional goals.</p>

      <h2>A Simple Tool for Everyday Classroom Use</h2>
      <p>Time to Multiply helps teachers provide multiplication fluency practice in a way that is practical, flexible, and easy to fit into the school day. It works during math centers, intervention groups, independent work time, and early finisher time, making it a useful classroom resource across multiple parts of the day.</p>
      <p>For teachers in grades 2 through 4, it is a simple way to keep multiplication practice focused, consistent, and meaningful.</p>
    `,
  },
  {
    slug: "make-multiplication-practice-easier-at-home",
    title: "Make Multiplication Practice Easier at Home",
    date: "2026-03-28",
    excerpt:
      "Helping your child learn multiplication does not have to mean long homework battles or frustration. With short, focused practice and the right tools, kids can build speed, accuracy, and confidence.",
    tags: ["Multiplication", "Parents", "Math"],
    heroImage: {
      src: "/motherworking with daughter.png",
      alt: "Mother and young daughter using the Time to Multiply app together on a phone",
    },
    appPromo: {
      href: "/apps/time-to-multiply",
      appName: "Time to Multiply",
      appIconSrc: "/time-to-multiply.png",
      appIconAlt: "Time to Multiply app icon",
      tagline: "Build multiplication fact fluency — fast.",
      description:
        "Time to Multiply uses timed drills, visual grids, and instant feedback to help elementary students build fact fluency at their own pace. A one-time purchase — no subscription required.",
      videoSrc: "/promo-time-to-multiply-video.mp4",
      images: [
        {
          src: "/time-to-multiply-1.jpg",
          alt: "Student practicing multiplication with Time to Multiply",
          caption: "Daily Practice",
        },
        {
          src: "/time-to-multiply-2.jpg",
          alt: "Multiplication grid view in Time to Multiply",
          caption: "Visual Grid Learning",
        },
        {
          src: "/time-to-multiply-3.jpg",
          alt: "Timed challenge mode in Time to Multiply",
          caption: "Timed Challenge Mode",
        },
      ],
      ctaLabel: "Learn More About Time to Multiply",
    },
    content: `
      <p>Helping your child learn multiplication does not have to mean long homework battles, frustration, or another monthly subscription. With the right kind of practice, just a few focused minutes a day can help children build speed, accuracy, and confidence.</p>
      <p>Time to Multiply is designed to make multiplication practice simple, effective, and easier to fit into real family life.</p>

      <h2>3 Signs Your Child Needs More Multiplication Fluency Practice</h2>
      <p>Your child may understand multiplication but still need more fluency practice if they often pause for a long time on basic facts. They may know what multiplication means, but not be able to recall answers quickly enough to keep up with their work.</p>
      <p>Another sign is that other math skills start feeling harder than they should. Division, fractions, word problems, and multi-step math often become more difficult when multiplication facts are not automatic.</p>
      <p>A third sign is frustration. If your child avoids multiplication, guesses often, or starts to feel discouraged during practice, the issue may not be ability. Often, it simply means they need short, consistent repetition in a format that feels manageable.</p>

      <h2>A Simple 5-Minute Multiplication Routine</h2>
      <p>Long practice sessions are not always the answer. In many cases, a short daily routine works better.</p>
      <p>Start with one multiplication set, such as the 4s, 6s, or 7s. Focusing on one area at a time keeps practice clear and manageable.</p>
      <p>Spend the first minute reviewing a few familiar facts. Then use the next few minutes for focused practice. Finish by noticing progress, whether that means faster answers, fewer mistakes, or more confidence than the day before.</p>
      <p>Five minutes is enough to create consistency without making multiplication feel overwhelming. It is a small routine that can fit into busy afternoons, homework time, or after-school practice.</p>

      <h2>Why Short Practice Beats Long Homework Battles</h2>
      <p>When practice drags on too long, children often become tired, discouraged, or resistant. Once frustration takes over, learning slows down.</p>
      <p>Short practice sessions work because they keep the experience focused and doable. A child is more likely to stay engaged for five minutes than for a long review session that feels never-ending.</p>
      <p>Over time, those short sessions add up. Children begin to answer more quickly, feel more successful, and build momentum without the stress that often comes with extended homework struggles.</p>

      <h2>One-Time Purchase vs. Another Subscription</h2>
      <p>Families already manage enough recurring charges. Adding another subscription is not always appealing, especially for something you want to keep simple.</p>
      <p>A one-time purchase gives parents a clear, straightforward option. You pay once, your child keeps practicing, and you do not have to keep track of another monthly fee.</p>
      <p>That means you can focus on helping your child improve, not on deciding whether another subscription still fits the budget.</p>

      <h2>A Smarter Way to Practice Multiplication</h2>
      <p>Children do not always need more time. Often, they need better practice: short, focused, and consistent.</p>
      <p>Time to Multiply helps children strengthen multiplication fluency in a way that supports confidence and keeps practice from feeling like a daily struggle.</p>
    `,
  },
  {
    slug: "why-educational-apps-matter",
    title: "Why Educational Apps Matter for K–12 Students",
    date: "2026-03-01",
    excerpt:
      "Educational apps are transforming how students learn at home and in the classroom. Here's why they matter and how to choose the right ones.",
    tags: ["EdTech", "K-12", "Learning"],
    heroImage: {
      src: "/girl working ipad and educatonal apps.png",
      alt: "Elementary school girl using an iPad with an Apple Pencil during a classroom lesson, with a teacher helping students in the background",
    },
    content: `
      <p>Educational apps have become an increasingly important part of modern learning. From phonics practice for kindergarteners to algebra drills for high schoolers, the right app can reinforce classroom lessons and make skill-building feel more engaging.</p>
      <h2>Engagement Through Interactivity</h2>
      <p>Unlike static worksheets, apps can respond to a student's input in real time — adjusting difficulty, providing instant feedback, and rewarding progress. This interactivity keeps learners motivated and helps them build confidence as they advance.</p>
      <h2>Learning at Their Own Pace</h2>
      <p>One of the biggest advantages of educational apps is flexibility. Students can revisit concepts as many times as they need without feeling the social pressure of a classroom setting. This is particularly valuable for learners who need a little extra time to grasp new ideas.</p>
      <h2>Choosing the Right App</h2>
      <p>When evaluating an educational app, look for clear learning objectives, age-appropriate content, and measurable progress. At Quackenworth, every app we build is designed around real curriculum goals — so both teachers and parents can trust that screen time is time well spent.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
