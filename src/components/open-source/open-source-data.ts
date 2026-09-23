export type OpenSourceContribution = {
  repository: string;
  description: string;
  mergedPrs: number;
  href: string;
};

export const openSourceContributions: readonly OpenSourceContribution[] = [
  {
    repository: "ChatApp",
    description:
      "Contributed group chat functionality, member and admin management, state synchronization, and bug fixes across the frontend and backend.",
    mergedPrs: 6,
    href: "https://github.com/Pritam-nitj/ChatApp",
  },
  {
    repository: "DecodeDsa",
    description:
      "Improved algorithm visualizations with reset controls and fixed visualization state handling for invalid square-matrix input.",
    mergedPrs: 2,
    href: "https://github.com/V-Sharanya/DecodeDsa",
  },
  {
    repository: "PolicyEngine",
    description:
      "Fixed scrolling behavior for filtered Research results when the results container was not fully visible in the viewport.",
    mergedPrs: 1,
    href: "https://github.com/PolicyEngine/policyengine-app",
  },
];
