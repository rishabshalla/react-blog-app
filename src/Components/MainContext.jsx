import { useState, createContext } from "react";

export const MainContext = createContext();

export const DataContext = (props) => {
  const [Data, setData] = useState([
    {
      id: "1",
      title: `Jammu and Kashmir Tourism Department Organises Festival Near Dal Lake to Welcome Spring`,
      body: `Kashmir is one of the most beautiful destinations to visit in India. The Tourism Department hosted a festival at Zabarwan Park situated on the shores of breath-takingly pretty Dal Lake to celebrate the onset of spring in Kashmir.`,
      category: "Tourism",
      date: `March 23, 2022`,
      url: "https://images.news18.com/ibnlive/uploads/2021/11/dal-lake-srinagar-2.jfif_-16366171073x2.jpg?impolicy=website&width=510&height=356",
    },
    {
      id: "2",
      title:
        "Italy Tourism Could be Hit as Deadly Bacteria Plagues Millions of Olive Trees",
      body: `If you are planning to visit Italy and are inspired by its stunning olive tree orchards, you may be in for some disappointment. The picturesque olive trees of Italy have been plagued with a bacterium which is causing their destruction.`,
      category: "Tourism",
      date: `March 23, 2022`,
      url: "https://images.news18.com/ibnlive/uploads/2022/03/olive-tree-italy-16480416113x2.jpg?impolicy=website&width=510&height=356",
    },
    {
      id: "3",
      title:
        "These Tourist Spots Make France the Most Visited Country in the World",
      body: `France is the world’s most visited country and it’s no surprise that it is so because of the beauty the country holds. According to CNBC, about 90 million international tourists visited France in 2019. France’s tourism industry, according to its Foreign Ministry, contributes 8 percent to the country’s GDP.`,
      category: "Tourism",
      date: `March 23, 2022`,
      url: "https://images.news18.com/ibnlive/uploads/2022/03/eiffel-tower-16480407043x2.jpg?impolicy=website&width=510&height=356",
    },
    {
      id: "4",
      title:
        "Explained: Why the Ukraine conflict spells trouble for tourism in Thailand and Vietnam",
      body: `In pre-pandemic times, most foreign visitors to Phan Thiet, a city in southern Vietnam that is affectionately known as "Little Moscow," were Russian. Not too far away in Nha Trang, the capital of Khanh Hoa province, restaurant menus are translated in Russian and Mandarin. At beachside resorts, Russian food dominates the buffets. Tour agencies have popped up to cater only to Russians. This is partly a result of history.`,
      category: "Tourism",
      date: `March 23, 2022`,
      url: "https://fl.thgim.com/incoming/84dftr/article38460567.ece/alternates/FREE_810/tourism-thai-vietjpg",
    },
    {
      id: "5",
      title: "Spiritual tourism picks up as restrictions end",
      body: `As places of worship across the country open up, hotels and travel companies are upbeat about the return of business from spiritual tourism.

Demand for travel is rising for destinations like Shirdi, Vrindavan, Ajmer and Bodh Gaya, among others, as pilgrims lock dates to visit temples and religious cities.`,
      category: "Tourism",
      date: `March 23, 2022`,
      url: "https://images.livemint.com/img/2022/03/22/600x338/Shirdi_1579406957579_1647944036952.jpg",
    },
    {
      id: "1",
      title: `Protein powder for men: Special supplements for your fitness needs`,
      body: `When it comes to fitness and nutritional supplements, the needs are different for everyone. The need for nutrients depends on the daily activity levels, body weight, age, metabolism, gender, health conditions and more. So, there are times when you would need a special nutritional supplement over a generic one to give the right nutrients in the right amount to your body.`,
      category: "Fitness",
      date: `March 23, 2022`,
      url: "https://static.toiimg.com/thumb/msid-90396203,imgsize-45970,width-400,resizemode-4/90396203.jpg",
    },
    {
      id: "2",
      title: `Samantha Ruth Prabhu Inspires Fans Towards Fitness In New Workout Post; 'you Got This'`,
      body: `Actor Samantha Ruth Prabhu kick-started Wednesday by giving major fitness goals to her fandom. The Ye Maaya Chesave star enjoyed 'abs day' at the gym today, and while doing so, she took to Instagram to share a workout photo of herself, thereby motivating fans towards a healthy lifestyle. The South diva, who is also well-known for sharing empowering quotes and messages online, further detailed the strength of a tiny spark that can ignite a burning passion in one's life.`,
      category: "Fitness",
      date: `March 23, 2022`,
      url: `https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/h73agtxrsrwsxnou_1648020588.jpeg`,
    },
    {
      id: "3",
      title: `THE BEST FITNESS TRACKERS TO BUY RIGHT NOW`,
      body: `FitnessFitness trackers have come a long way from the simple bands that tracked steps and little else. Modern trackers can monitor everything from your heart health to how well you’ve recovered from a hard bout of training. They’ve got sensors galore and, in some cases, can give smartwatches a run for their money. Whatever your fitness goals are, there’s probably a fitness tracker that can help you achieve them.`,
      category: "Fitness",
      date: `March 23, 2022`,
      url: `https://cdn.vox-cdn.com/thumbor/S0Gcw61259ypmt21bOKZFoHExEA=/0x0:2040x1360/1570x883/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70657032/acastro_220321_5092_0001.0.jpg`,
    },
    {
      id: "4",
      title: `IPL 2022: Virat Kohli Advised Me To Work On Bowling And Fitness, Reveals SRH’s Umran Malik`,
      body: `Ahead of the upcoming IPL 2022 edition, which begins on March 26 with Chennai Super Kings (CSK) taking on Kolkata Knight Riders (KKR), Sunrisers Hyderabad fast bowler Umran Malik recalled words of wisdom he got from Royal Challengers Bangalore (RCB) batter Virat Kohli in the IPL 2021.`,
      category: "Fitness",
      date: `March 23, 2022`,
      url: `https://cricketaddictor.gumlet.io/wp-content/uploads/2021/10/Virat-Kohli-Umran-Malik.png?compress=true&quality=80&w=1200&dpr=1.0`,
    },
    {
      id: "5",
      title: `Climbing, carrying stuff, running at an obstacle course racing, these fitness enthusiasts kicked up dust on OMR`,
      body: `They crawled, rolled on the ground, carried stuff, climbed over obstacles and what not. Each of them had their own way of overcoming the obstacles on their way to the finish line. Last weekend, Chennaiites witnessed some action-packed scenes on OMR as fitness enthusiasts from different parts of the country huddled up for the two-day event of obstacle course racing (OCR).`,
      category: "Fitness",
      date: `March 23, 2022`,
      url: `https://static.toiimg.com/thumb/msid-90386498,width-800,height-600,resizemode-75,imgsize-200668,pt-32,y_pad-40/90386498.jpg`,
    },
    {
      id: "1",
      title: `Nvidia unveils new technology to speed up AI, launches new supercomputer`,
      body: `Nvidia Corp (NVDA.O) on Tuesday announced new chips and technologies that it said will boost the computing speed of increasingly complicated artificial intelligence algorithms, stepping up competition against rival chipmakers vying for lucrative data center business.`,
      category: `Technology`,
      date: `March 23, 2022`,
      url: `https://www.reuters.com/resizer/tEv6S-jt7EO8NPN8ulahftgsDV0=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PVBB3JD4BJK6LCNCPVKXMWBPQU.jpg`,
    },
    {
      id: "2",
      title: `Nations scramble to take a lead in 6G technology`,
      body: `As 6G, the next-generation communication technology, is widely expected to achieve commercialization around 2030, various nations are ramping up research and development efforts, despite the absence of clear technical routes or unified international standards.`,
      category: `Technology`,
      date: `March 23, 2022`,
      url: `https://www.globaltimes.cn/Portals/0/attachment/2022/2022-03-07/10abb44c-70a7-439e-8580-57c483ce263c.jpeg`,
    },
    {
      id: "3",
      title: `Rs 1,066 cr spent in last 5 years for innovation of environmentally sustainable technology`,
      body: `The government on Wednesday said Rs 1,086 crore has been allocated in the last five years for innovation of environmentally sustainable technology of which Rs 1,066 crore has been spent. Responding to a question in Lok Sabha, Minister of State (Independent charge) Dr Jitendra Singh said a total of Rs 31.21 crore have been allocated for start-ups and NGOs working for research and development for innovation of environmentally sustainable technology in the last three years.`,
      category: `Technology`,
      date: `March 23, 2022`,
      url: `https://img.etimg.com/thumb/msid-90397029,width-300,imgsize-45248,,resizemode-4,quality-100/jitendra-singh-ani.jpg`,
    },
    {
      id: "4",
      title: `For a road out of China for technology companies, India may be a viable option`,
      body: `Global electronics suppliers looking to diversify their manufacturing footprint beyond China are taking advantage of growing demand for sophisticated components used in electric vehicles to shift production closer to their customers overseas. It’s a smart move that could allay fears that the supply chain is too dependent on one location amid shortages and geopolitical tensions.`,
      category: `Technology`,
      date: `March 23, 2022`,
      url: `https://img.etimg.com/thumb/msid-90344799,width-300,imgsize-117254,,resizemode-4,quality-100/istock-166107706-1.jpg`,
    },
    {
      id: "5",
      title: `Asian shares rise after Wall Street rally led by technology companies`,
      body: `Asian shares rose Wednesday, following a rally on Wall Street led by technology companies, although investors remain concerned about the war in Ukraine and inflation. Benchmarks were higher across the Asian region, despite worries about rising energy costs. Oil prices rose, while the dollar gained against the Japanese yen.`,
      category: `Technology`,
      date: `March 23, 2022`,
      url: `https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/23/w900X450/WALLSTREET.jpg?w=640&dpr=1.0`,
    },
    {
      id: "1",
      title: "The Kashmir Files: Bollywood film that divides India",
      body: `A Bollywood film about the exodus of Kashmiri Hindus has sparked a huge controversy in India. While some people see it as a true depiction of the Hindu killings in the 1990s, others say it distorts historical facts.`,
      category: "Bollywood",
      date: "March 23, 2022",
      url: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/03/pjimage-2022-03-16t165854-1647430199-1647773682.jpg",
    },
    {
      id: "2",
      title:
        "Court summons Salman Khan for allegedly misbehaving with a journalist",
      body: `ANI reported that Salman has allegedly misbehaved with a journalist, for which the Andheri Magistrate Court has summoned him. He has been asked to appear in court on April 5 in a 2019 case filed by a journalist Ashok Pandey. Salman has been charged under IPC sections 504 and 506.`,
      category: "Bollywood",
      date: "March 23, 2022",
      url: "https://timesofindia.indiatimes.com/thumb/msid-90383081,width-800,height-600,resizemode-4/90383081.jpg?imglength=32922",
    },
    {
      id: "3",
      title:
        "When Katrina Kaif said she was packing her bags, leaving Bollywood ahead of Namastey London release",
      body: `Hard as it is to believe, it has been 15 long years since Katrina Kaif and Akshay Kumar-starrer Namastey London was released in cinemas. Namastey London is special for more than one reason.

Not only the Vipul Shah directorial drew everyone’s attention to leading lady Katrina’s acting chops, it also kickstarted comedian and actor Vir Das’ film career. The movie was received positively upon its release, and included names like the late Rishi Kapoor in its star cast.`,
      category: "Bollywood",
      date: "March 23, 2022",
      url: "https://images.indianexpress.com/2022/03/kaif1200.jpg",
    },
    {
      id: "4",
      title:
        "When Sanjay Dutt Took A Dig At Bollywood By Calling It A ‘Dirty Game’: “I’m Not A Part Of That Game”",
      body: `Sanjay Dutt stepped into the film world with the 1981 film Rocky, since then the actor carved his own place in the industry while he was also part of some unfortunate controversies. However, keeping aside the dark phase of his life the actor had said that he’s happy with his career graph. However, the actor also felt that the B-town has changed a lot which upsets him and also claimed that everything has become a dirty game.`,
      category: "Bollywood",
      date: "March 23, 2022",
      url: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/when-sanjay-dutt-felt-sad-about-the-changing-attitude-of-people-in-the-industry-01.jpg",
    },
    {
      id: "5",
      title:
        "Ananya Panday hopes Bollywood doesn't make any more remakes: 'I don't really want to see more...'",
      body: `Ananya Panday is basking in the success of her last release Gehraiyaan these days. The film, which released on Amazon Prime Video last month, was well received by critics even if it had polarising reviews from the viewers. In her short career, Ananya has already worked in one remake - Pati, Patni Aur Woh - but the actor is hoping that is the extent of remakes for her career for now. In a recent interview, the actor said she is hoping the trend of remakes in Bollywood dies down.`,
      category: "Bollywood",
      date: "March 23, 2022",
      url: "https://images.hindustantimes.com/img/2022/03/20/550x309/274635195_1624629087897558_2660029837697677746_n_1646107399531_1647762602095.jpg",
    },
    {
      id: "1",
      title: `Food Tips: 5 Foods to Help You Sleep Through The Night`,
      body: `People who fall sick often mostly do not follow a healthy sleeping pattern. With a healthy sleep pattern, the risk of having heart diseases, diabetes and obesity decreases. With a good night’s sleep, you can make better decisions at home and work. It is important that you eat healthy and have a solid sleep at night`,
      category: "Food",
      date: `March 23, 2022`,
      url: `https://static.india.com/wp-content/uploads/2022/03/pjimage-2022-03-21T161929.868.jpg?impolicy=Medium_Widthonly&w=700&h=467`,
    },
    {
      id: "2",
      title: `Chinese Food? Try This Recipe For Lip-Smacking Chicken Schezwan at Home`,
      body: `If you enjoy spicy Chinese cuisine, chicken schezwan is the perfect dish for dinner! You can try our quick and easy chicken schezwan dish at home. All you need for this dish is boneless chicken coated in cornflour and five-spice powder. The chicken is then stir-fried and cooked with chilies, ginger, garlic, onion, and a freshly made schezwan sauce.`,
      category: "Food",
      date: `March 23, 2022`,
      url: `https://images.news18.com/ibnlive/uploads/2022/03/untitled-design-15-6-16480429633x2.png?impolicy=website&width=510&height=356`,
    },
    {
      id: "3",
      title: `Vocal For Local: Gujarat Food Vendor Makes, Sells Pizza In 'Kulhad'`,
      body: `When it comes to street foods, let's agree, there's enough room for experimentation. If you look around, you will find a countless number of examples where regular, classic food items are given unique (bizarre at times) makeover. Be it Maggi filled golgappa or gulab jamun stuffed paratha, today every second person is trying to do something out-of-the-box for their patrons. While some experiments turn out to be a hit, some draw flaks and criticism. `,
      category: "Food",
      date: `March 23, 2022`,
      url: `https://c.ndtvimg.com/2022-02/rtae3o0o_onion-rings_625x300_24_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350`,
    },
    {
      id: "4",
      title: `Avoid These Food Items to Prevent Bad Breath, and Some Tips for Oral Care`,
      body: `Dental hygiene is an important thing that must be focused on while grooming yourself. Bad breath can be the reason why people avoid you or make a conversation with you. Bad breath or ‘halitosis’ can make a bad impression, but do not worry, there are certain foods to avoid and tips to keep bad breath at bay.`,
      category: "Food",
      date: `March 23, 2022`,
      url: `https://images.news18.com/ibnlive/uploads/2021/11/brushing-teeth-16464469473x2.jpg?impolicy=website&width=510&height=356`,
    },
    {
      id: "5",
      title: `Burmese Samosa Curry Is A Famous Burmese Street Food That Might Be A Hit With Desi Foodies`,
      body: `How many times do you look at a samosa and think to yourself, 'I don't want to eat that?' Almost never, right? Because we Indians love samosa in every available variation, even the latest fusion ones! With delicious and unique varieties of samosa ranging throughout the county, it is truly the peak of Indian cuisines and its worldwide popularity proves just that. However, did you know that apart from western countries being a fan of the spicy and tantalising samosa, there is another neighbouring country that has adapted samosa as its own? We are talking about Myanmar and its famous street food called - Samusa Thouk or Burmese Samosa Curry.`,
      category: "Food",
      date: `March 23, 2022`,
      url: `https://c.ndtvimg.com/2022-03/fhteoeig_burmese-samosa-curry_625x300_23_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350`,
    },
  ]);

  return (
    <>
      <MainContext.Provider value={[Data, setData]}>
        {props.children}
      </MainContext.Provider>
    </>
  );
};
