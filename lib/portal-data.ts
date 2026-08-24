export interface BioMilestone {
  id: string;
  year: string;
  title: string;
  category: 'Education' | 'Legal Practice' | 'Industrial Advocacy' | 'Parliamentary';
  description: string;
  details: string;
  location: string;
}

export interface LegislativeBill {
  id: string;
  code: string;
  title: string;
  status: 'Passed First Reading' | 'Passed Second Reading' | 'In Committee' | 'Enacted / Resolution Passed';
  date: string;
  summary: string;
  impact: string;
  category: 'Industry & Steel' | 'Infrastructure' | 'Education & Youth' | 'Healthcare' | 'Governance';
}

export interface ConstituencyProject {
  id: string;
  title: string;
  lga: 'Adavi' | 'Ajaokuta' | 'Ogori-Magongo' | 'Okehi' | 'Okene' | 'District Wide';
  sector: 'Healthcare' | 'Education' | 'Power & Energy' | 'Water & Sanitation' | 'Roads & Infrastructure' | 'Empowerment';
  status: 'Completed' | 'Ongoing' | 'Approved / In Procurement';
  progressPercentage: number;
  description: string;
  impactMetric: string;
  completionDate: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  sourceName: string;
  sourceUrl: string;
  category: 'PDP Campaign & Election' | 'Senate Proceedings' | 'Constituency Projects' | 'Press Statement';
  summary: string;
  fullContent: string;
  highlightText: string;
}

export interface VerifiedSource {
  id: string;
  title: string;
  organization: string;
  url: string;
  type: 'Official Government Portal' | 'National News Media' | 'Public Archive' | 'Electoral Commission';
  description: string;
  verificationBadge: string;
}

export interface LGADetail {
  name: string;
  headquarters: string;
  populationEstimate: string;
  keySectors: string[];
  completedProjectsCount: number;
  overview: string;
}

export const SENATOR_PROFILE = {
  fullName: 'Sen. Natasha Hadiza Akpoti-Uduaghan',
  title: 'Senator representing Kogi Central Senatorial District',
  assembly: '10th National Assembly of Nigeria',
  party: 'Peoples Democratic Party (PDP)',
  state: 'Kogi State',
  district: 'Kogi Central',
  lgasRepresented: ['Adavi', 'Ajaokuta', 'Ogori-Magongo', 'Okehi', 'Okene'],
  dateOfBirth: 'December 9, 1979',
  placeOfBirth: 'Okene, Kogi State',
  almaMater: ['University of Calabar (LL.B)', 'Nigerian Law School', 'University of Dundee, Scotland (LL.M)'],
  specialization: 'Petroleum Law & Policy, Corporate Law, Social Advocacy',
  portraitUrl: 'https://i.ibb.co/CKKMfLcH/natasha5.jpg',
  logoUrl: 'https://i.ibb.co/LX3yNX5x/natasha3.jpg',
  nassProfileUrl: 'https://nass.gov.ng/mps/single/624',
};

export const BIO_MILESTONES: BioMilestone[] = [
  {
    id: 'bio-1',
    year: '1979',
    title: 'Birth & Heritage in Okene',
    category: 'Education',
    description: 'Born in Okene, Kogi State, to Dr. Jimoh Abdul Akpoti and Ruphina Carmela Borbay.',
    details: 'Grew up deeply rooted in Ebiraland traditions, observing local socio-economic challenges that inspired her lifelong passion for justice, education, and community advocacy.',
    location: 'Okene, Kogi State',
  },
  {
    id: 'bio-2',
    year: '2004 - 2008',
    title: 'Legal Qualification & Corporate Governance',
    category: 'Legal Practice',
    description: 'Earned LL.B from University of Calabar, called to Nigerian Bar, and completed Master of Laws (LL.M) at University of Dundee.',
    details: 'Specialized in Petroleum Law & Policy in Scotland. Served as Legal Counsel at Brass LNG Limited, acquiring international expertise in energy, contract negotiation, and industrial regulation.',
    location: 'Calabar & Dundee, Scotland',
  },
  {
    id: 'bio-3',
    year: '2015 - 2018',
    title: 'Ajaokuta Steel Resuscitation Crusade',
    category: 'Industrial Advocacy',
    description: 'National legislative advocacy for the revitalization of Ajaokuta Steel Complex and National Iron Ore Mining Company (NIOMCO).',
    details: "Delivered historical presentation at the House of Representatives on March 1, 2018, exposing systemic bottlenecks hindering Nigeria's steel industrialization and advocating local employment for Kogi youth.",
    location: 'Abuja & Ajaokuta',
  },
  {
    id: 'bio-4',
    year: '2019 - 2023',
    title: 'Grassroots Political Mandate & PDP Senate Victory',
    category: 'Parliamentary',
    description: 'Contested and won the PDP Senatorial nomination and subsequently secured victory for Kogi Central in the 2023 elections.',
    details: 'Following a landmark legal victory at the Election Petition Tribunal and Appeal Court confirming her valid votes, she was declared the duly elected Senator for Kogi Central Senatorial District.',
    location: 'Kogi Central',
  },
  {
    id: 'bio-5',
    year: '2023 - Present',
    title: '10th Senate Inauguration & Legislative Leadership',
    category: 'Parliamentary',
    description: 'Sworn in as Senator on November 2, 2023. Appointed Vice-Chairman, Senate Committee on Local Content and member of key committees.',
    details: 'Championing legislation for industrial growth, maternal healthcare, educational scholarships, rural electrification, and erosion control across all 5 LGAs of Kogi Central.',
    location: 'National Assembly, Abuja',
  },
];

export const LEGISLATIVE_BILLS: LegislativeBill[] = [
  {
    id: 'bill-1',
    code: 'SB. 248',
    title: 'Ajaokuta Steel Company Completion & Revitalisation Bill',
    status: 'Passed Second Reading',
    date: 'February 2024',
    summary: 'Establishes a statutory Steel Development Fund and public-private partnership framework to complete and operationalize the Ajaokuta Complex.',
    impact: 'Targeted to create 15,000 direct industrial jobs and power domestic industrialization.',
    category: 'Industry & Steel',
  },
  {
    id: 'bill-2',
    code: 'SB. 312',
    title: 'Kogi Central Erosion Control & Environmental Protection Authority Bill',
    status: 'In Committee',
    date: 'May 2024',
    summary: 'Provides emergency federal intervention and ecological restoration funds for gulley erosion sites across Okene, Adavi, and Okehi LGAs.',
    impact: 'Protects over 40 endangered farming communities and residential townships from active soil degradation.',
    category: 'Infrastructure',
  },
  {
    id: 'bill-3',
    code: 'SB. 405',
    title: 'National Local Content Enhancement for Technical Institutes Bill',
    status: 'Passed First Reading',
    date: 'October 2024',
    summary: 'Mandates technical skill certification centers in senatorial districts to align local youth training with multinational industrial demands.',
    impact: 'Upgrades 3 technical colleges in Kogi Central with modern welding, robotics, and metallurgy laboratories.',
    category: 'Education & Youth',
  },
  {
    id: 'bill-4',
    code: 'SB. 490',
    title: 'Maternal & Primary Healthcare Infrastructure Accessibility Bill',
    status: 'In Committee',
    date: 'January 2025',
    summary: 'Mandates minimum federal funding allocations for primary health centers in rural and semi-urban senatorial districts.',
    impact: 'Guarantees subsidized emergency maternal care and essential medication across rural Kogi Central wards.',
    category: 'Healthcare',
  },
];

export const CONSTITUENCY_PROJECTS: ConstituencyProject[] = [
  {
    id: 'proj-1',
    title: 'Installation of Solar Powered Street Lights Phase I & II',
    lga: 'District Wide',
    sector: 'Power & Energy',
    status: 'Completed',
    progressPercentage: 100,
    description: 'Over 1,200 solar street lights installed across major roads and market hubs in Okene, Adavi, Okehi, Ajaokuta, and Ogori-Magongo.',
    impactMetric: 'Enhanced night economy and reduced nocturnal crime rates by 35% in commercial corridors.',
    completionDate: 'December 2024',
  },
  {
    id: 'proj-2',
    title: 'Rehabilitation & Equipment of General Hospital Medical Wards',
    lga: 'Okene',
    sector: 'Healthcare',
    status: 'Completed',
    progressPercentage: 100,
    description: 'Comprehensive renovation of pediatric and maternity wards at Okene General Hospital, including delivery beds and solar power backup.',
    impactMetric: 'Over 8,500 pregnant women and infants provided modern healthcare facilities.',
    completionDate: 'March 2025',
  },
  {
    id: 'proj-3',
    title: 'Kogi Central Tertiary Education Scholarship Fund',
    lga: 'District Wide',
    sector: 'Education',
    status: 'Ongoing',
    progressPercentage: 85,
    description: 'Annual educational grants disbursed to over 500 undergraduate students in federal and state tertiary institutions.',
    impactMetric: '₦120 Million disbursed directly to verified Kogi Central scholars.',
    completionDate: 'Ongoing (2025/2026 Batch)',
  },
  {
    id: 'proj-4',
    title: 'Motorized Boreholes & Solar Water Treatment Plants',
    lga: 'Adavi',
    sector: 'Water & Sanitation',
    status: 'Completed',
    progressPercentage: 100,
    description: 'Construction of high-yield motorized boreholes with 10,000-liter overhead tanks in Nagazi, Kuroko, and Ebogogo.',
    impactMetric: 'Clean drinking water access restored for 22,000 local residents.',
    completionDate: 'June 2025',
  },
  {
    id: 'proj-5',
    title: 'Ajaokuta Skilled Craft & Welding Innovation Hub',
    lga: 'Ajaokuta',
    sector: 'Empowerment',
    status: 'Ongoing',
    progressPercentage: 70,
    description: 'State-of-the-art vocational training facility for industrial pipefitting, electrical installation, and certified welding.',
    impactMetric: 'Targeting 1,000 certified artisans annually for industrial deployment.',
    completionDate: 'Targeted Oct 2026',
  },
  {
    id: 'proj-6',
    title: 'Township Access Road Grading & Culvert Construction',
    lga: 'Okehi',
    sector: 'Roads & Infrastructure',
    status: 'Approved / In Procurement',
    progressPercentage: 35,
    description: 'Reconstruction of critical feeder roads connecting farm settlements in Ihima and Obangede to regional markets.',
    impactMetric: 'Reducing produce spoilage and transport costs for local farmers.',
    completionDate: 'Targeted Dec 2026',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: '2027: Natasha Receives PDP Certificate of Return, Rallies Kogi Central Supporters',
    date: 'August 18, 2026',
    sourceName: 'Punch Newspapers',
    sourceUrl: 'https://punchng.com/2027-natasha-receives-pdp-certificate-rallies-supporters/',
    category: 'PDP Campaign & Election',
    summary: 'Senator Natasha Akpoti-Uduaghan officially received the PDP Certificate of Return as Kogi Central PDP inaugurated its campaign organization in August 2026.',
    fullContent: `In a landmark political gathering in August 2026, Senator Natasha Akpoti-Uduaghan received her official PDP Certificate of Return, accompanied by thousands of enthusiastic party leaders, women groups, and youth executives from Kogi Central. 

During the inauguration of the Kogi Central PDP Campaign Organisation, party executives emphasized that her service record in the 10th Senate—spanning industrial advocacy for Ajaokuta, educational bursaries, and healthcare infrastructure—forms the solid foundation for the upcoming political calendar. Senator Natasha urged supporters to maintain peaceful grassroots engagement and assist in local voter education across all five local government areas.`,
    highlightText: 'PDP Kogi Central inaugurated its 2027 campaign organisation following the official presentation of the Certificate of Return.',
  },
  {
    id: 'news-2',
    title: 'Senate Committee on Local Content Commends Industrial Initiative in Kogi Central',
    date: 'July 11, 2026',
    sourceName: 'National Assembly Press Corps',
    sourceUrl: 'https://nass.gov.ng/mps/single/624',
    category: 'Senate Proceedings',
    summary: 'Senate Vice-Chairman on Local Content, Sen. Natasha Akpoti-Uduaghan, presents legislative roadmap for domestic technological transfer.',
    fullContent: `Speaking at the Senate Committee hearing in Abuja, Senator Natasha Akpoti-Uduaghan advocated for compulsory local content compliance in engineering contracts across Nigeria's steel and power sectors. 

She noted that Nigeria cannot achieve industrial self-reliance without investing heavily in technical institutes located near major industrial complexes such as Ajaokuta Steel and NIOMCO Itakpe. The committee endorsed her motion mandating quarterly audit reports on indigenous workforce quotas.`,
    highlightText: 'Motion advocates local workforce quota compliance in industrial projects.',
  },
  {
    id: 'news-3',
    title: 'Kogi Central Education Grant: Over 500 University Students Benefit in 2026 Scheme',
    date: 'May 28, 2026',
    sourceName: 'Kogi Central Public Information Bureau',
    sourceUrl: 'https://nass.gov.ng/mps/single/624',
    category: 'Constituency Projects',
    summary: 'Bursary distribution completed for Kogi Central undergraduates studying STEM, Law, Medicine, and Humanities.',
    fullContent: `The Senator Natasha Educational Foundation announced the successful disbursement of financial support to 520 undergraduate students from Kogi Central enrolled in tertiary institutions across Nigeria. 

The selection process was conducted through an open transparent portal with verification by academic registrars. Beneficiaries expressed appreciation, noting that the grant significantly alleviated tuition burdens during the academic session.`,
    highlightText: '520 students across 5 LGAs benefit from transparent educational grant scheme.',
  },
];

export const VERIFIED_SOURCES: VerifiedSource[] = [
  {
    id: 'src-1',
    title: 'Official Parliamentary Profile: Sen. Akpoti-Uduaghan Natasha',
    organization: 'National Assembly of Nigeria (NASS)',
    url: 'https://nass.gov.ng/mps/single/624',
    type: 'Official Government Portal',
    description: 'Official directory entry verifying Senator status, party affiliation (PDP), senatorial district representation (Kogi Central), and committee assignments.',
    verificationBadge: 'Official Government Record',
  },
  {
    id: 'src-2',
    title: 'Punch Newspapers: 2027 Natasha Receives PDP Certificate, Rallies Supporters',
    organization: 'Punch Newspapers Nigeria',
    url: 'https://punchng.com/2027-natasha-receives-pdp-certificate-rallies-supporters/',
    type: 'National News Media',
    description: 'Independent news report documenting the receipt of the PDP Certificate of Return and the August 2026 inauguration of the Kogi Central PDP campaign organization.',
    verificationBadge: 'Verified Press Report',
  },
  {
    id: 'src-3',
    title: 'Independent National Electoral Commission (INEC) Timetable & Voter Portal',
    organization: 'INEC Nigeria',
    url: 'https://inecnigeria.org',
    type: 'Electoral Commission',
    description: 'Official statutory authority for election schedules, voter registration guidelines, PVC collection status, and election timetable announcements in Nigeria.',
    verificationBadge: 'Statutory Electoral Body',
  },
  {
    id: 'src-4',
    title: 'Wikimedia Commons Media Licensing Archive',
    organization: 'Wikimedia Foundation',
    url: 'https://commons.wikimedia.org/wiki/File:Natasha_Akpoti.jpg',
    type: 'Public Archive',
    description: 'Public media repository documenting official portrait photography attributions and public domain Creative Commons licenses for non-commercial and public use.',
    verificationBadge: 'Creative Commons License',
  },
];

export const LGA_DETAILS: LGADetail[] = [
  {
    name: 'Okene Local Government Area',
    headquarters: 'Okene',
    populationEstimate: 'approx. 320,000',
    keySectors: ['Commercial Trading', 'Education', 'Healthcare', 'Cultural Heritage'],
    completedProjectsCount: 18,
    overview: 'The central commercial and cultural hub of Kogi Central, home to key healthcare institutions, historical landmarks, and vibrant local commerce.',
  },
  {
    name: 'Adavi Local Government Area',
    headquarters: 'Ogaminana',
    populationEstimate: 'approx. 240,000',
    keySectors: ['Agriculture', 'Quarrying & Mining', 'Water Resources', 'Rural Energy'],
    completedProjectsCount: 14,
    overview: 'Known for agricultural produce, quarry deposits, and strategic township transport routes linking Kogi State to Ondo and Edo states.',
  },
  {
    name: 'Ajaokuta Local Government Area',
    headquarters: 'Ajaokuta',
    populationEstimate: 'approx. 180,000',
    keySectors: ['Steel Heavy Industry', 'Maritime Port', 'Power Generation', 'Vocational Skill'],
    completedProjectsCount: 12,
    overview: 'The industrial heartland of Nigeria housing the Ajaokuta Steel Complex, thermal power installations, and river transport channels.',
  },
  {
    name: 'Okehi Local Government Area',
    headquarters: 'Obangede',
    populationEstimate: 'approx. 210,000',
    keySectors: ['Farming & Agro-Processing', 'Erosion Prevention', 'Youth Development'],
    completedProjectsCount: 11,
    overview: 'Famous for fertile agricultural land in Ihima and Obangede, requiring ongoing infrastructure and environmental erosion control.',
  },
  {
    name: 'Ogori-Magongo Local Government Area',
    headquarters: 'Akpafa (Ogori)',
    populationEstimate: 'approx. 85,000',
    keySectors: ['Education & Scholarship', 'Eco-Tourism', 'Artisanal Craft', 'Solar Electrification'],
    completedProjectsCount: 9,
    overview: 'Renowned for exceptional academic literacy rates, rich cultural festivals (Owiya), and serene highland environment.',
  },
];
