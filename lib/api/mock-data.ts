export type NewsItem = {
  title: string
  tag: string
  excerpt: string
}

export type ResourceItem = {
  title: string
  type: string
  description: string
  action: string
  icon: 'file' | 'book' | 'download' | 'play'
}

export type ResourceGroup = {
  title: string
  items: string[]
}

export type EventItem = {
  title: string
  date: string
  location: string
  description: string
}

export type ProgramItem = {
  title: string
  description: string
  icon: 'users' | 'target' | 'megaphone' | 'book'
}

export type Testimony = {
  title: string
  text: string
}

export type PillarItem = {
  title: string
  body: string
}

export const mockData = {
  news: [
    {
      title: 'Campus Fellowship Expansion in Ethiopia',
      tag: 'Ministry Update',
      excerpt:
        'FOCUS launched new student fellowship groups and mentoring circles in additional campuses this semester.',
    },
    {
      title: 'Faith & Student Leadership: Practical Lessons',
      tag: 'Article',
      excerpt:
        'A practical reflection on leading with humility, consistency, and spiritual conviction in student ministry.',
    },
    {
      title: 'Student Leader Spotlight: Community Impact',
      tag: 'Spotlight',
      excerpt:
        'Highlighting student leaders who mobilized outreach and service projects in their Local communities.',
    },
  ] as NewsItem[],

  resourceGroups: [
    {
      title: 'Bible Study Materials',
      items: ['Weekly study notes', 'Devotional guides', 'Small-group discussion outlines'],
    },
    {
      title: 'Sermons / Talks',
      items: ['Campus sermon recordings', 'Leadership talks', 'Audio and downloadable summaries'],
    },
    {
      title: 'Training Materials',
      items: ['Leadership training modules', 'Mentoring handbooks', 'Evangelism guides'],
    },
    {
      title: 'Downloads / Forms',
      items: ['Membership form', 'Volunteer sign-up', 'Event participation form'],
    },
    {
      title: 'Volunteer Opportunities',
      items: ['Mentorship support', 'Outreach teams', 'Campus service roles'],
    },
  ] as ResourceGroup[],

  resources: [
    {
      title: 'Campus Fellowship Starter Guide',
      type: 'PDF Guide',
      description: 'A practical guide for student leaders starting or strengthening fellowship groups.',
      action: 'Download guide',
      icon: 'file',
    },
    {
      title: 'Bible Study Series Plan',
      type: 'Study Pack',
      description: 'Sample Bible study outlines and facilitation notes for weekly student gatherings.',
      action: 'View plan',
      icon: 'book',
    },
    {
      title: 'Student Leadership Toolkit',
      type: 'Toolkit',
      description: 'Planning templates, team structure samples, and event checklists for ministries.',
      action: 'Open toolkit',
      icon: 'download',
    },
    {
      title: 'Mentorship Training Session',
      type: 'Video Session',
      description: 'Foundational training video for mentors serving university students in fellowship.',
      action: 'Watch session',
      icon: 'play',
    },
  ] as ResourceItem[],

  events: [
    {
      title: 'Weekly Prayer Meeting',
      date: 'Every Friday',
      location: 'Campus Fellowship Hall',
      description: 'A weekly prayer gathering for students and ministry teams.',
    },
    {
      title: 'Campus Outreach Day',
      date: 'April 18, 2026',
      location: 'Main Campus Grounds',
      description: 'Evangelism and community service event led by student volunteers.',
    },
    {
      title: 'Student Leadership Conference',
      date: 'May 10-12, 2026',
      location: 'Addis Ababa',
      description: 'Leadership and discipleship conference for student ministry leaders.',
    },
  ] as EventItem[],

  programs: [
    {
      title: 'Campus Ministry',
      description:
        'Weekly fellowship meetings, Bible studies, worship gatherings, and prayer sessions that build Christian community on campus.',
      icon: 'users',
    },
    {
      title: 'Leadership Development',
      description:
        'Workshops, mentorship tracks, and student retreats that equip leaders for campus ministry and lifelong service.',
      icon: 'target',
    },
    {
      title: 'Evangelism / Outreach',
      description:
        'Campus outreach events, Gospel conversations, and community service projects that demonstrate faith in action.',
      icon: 'megaphone',
    },
    {
      title: 'Discipleship Programs',
      description:
        'Mentoring pathways, small groups, and prayer teams that support personal spiritual growth and accountability.',
      icon: 'book',
    },
  ] as ProgramItem[],

  testimonies: [
    {
      title: 'Growth in Leadership',
      text: 'Through mentorship and workshops, I learned to lead my fellowship team with confidence and faith.',
    },
    {
      title: 'Faith Strengthened',
      text: 'Bible study and prayer groups gave me a strong spiritual foundation during university life.',
    },
  ] as Testimony[],

  pillars: [
    { title: 'Evangelism', body: 'Large-scale outreach' },
    { title: 'Girls Ministry', body: 'Focused empowerment' },
    { title: 'Leadership Development', body: 'Capacity building' },
    { title: 'Spiritual Nurturing', body: 'Discipleship and building body of christ' },
    { title: 'Social Service & Community Development', body: 'Practical engagement' },
  ] as PillarItem[],
}

