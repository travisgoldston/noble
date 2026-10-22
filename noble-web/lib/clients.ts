export type HelpedClient = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  className: string;
  onDark?: boolean;
};

export const helpedClients: HelpedClient[] = [
  {
    name: "Budgetocity",
    href: "https://budgetocity.com",
    src: "/clients/budgetocity.png",
    width: 220,
    height: 36,
    className: "h-8 w-auto md:h-9",
  },
  {
    name: "Brush Boss Land Works",
    href: "https://brushboss.com",
    src: "/clients/brush-boss.png",
    width: 150,
    height: 120,
    className: "h-12 w-auto md:h-14",
  },
  {
    name: "Phoenix Financial Coaching",
    href: "https://phoenixfinancialcoaching.com",
    src: "/clients/phoenix.png",
    width: 88,
    height: 138,
    className: "h-12 w-auto md:h-14",
  },
  {
    name: "McKinney Garage Doors",
    href: "https://mckinneydoors.com",
    src: "/clients/mckinney-doors.png",
    width: 220,
    height: 65,
    className: "h-9 w-auto md:h-10",
  },
  {
    name: "Talent General Contracting",
    href: "https://talentgeneralcontracting.com",
    src: "/clients/talent.png",
    width: 120,
    height: 138,
    className: "h-12 w-auto md:h-14",
    onDark: true,
  },
];
