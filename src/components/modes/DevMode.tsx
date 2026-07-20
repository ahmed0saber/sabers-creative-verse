import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Folder,
  FolderOpen,
  File,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import skillsCategories from "@/data/skills";
import articles from "@/data/articles";
import socialPlatforms from "@/data/social-platforms";
import youtubeContent from "@/data/youtube-content";
import projects from "@/data/projects";
import openSourceProjects from "@/data/opensource-projects";
import experience from "@/data/experience";
import journey from "@/data/journey";
import education from "@/data/education";
import certifications from "@/data/certifications";
import convertProjectsToTree from "@/utils/convertProjectToTree";
import generateReadmeContent from "@/utils/generateReadme";

interface FileNode {
  name: string;
  type: "file" | "folder";
  content?: string;
  children?: FileNode[];
  icon?: React.ReactNode;
  url?: string; // For images or other file types that may have a URL
}

const DevMode = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["root", "projects"]),
  );
  const [selectedFile, setSelectedFile] = useState<string>("README.md");

  const fileStructure: FileNode[] = [
    {
      name: "README.md",
      type: "file",
      icon: <FileText className="h-4 w-4" />,
      content: generateReadmeContent(),
    },
    {
      name: "skills.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(skillsCategories, null, 2),
    },
    convertProjectsToTree(projects),
    {
      name: "experience.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(experience, null, 2),
    },
    {
      name: "education.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(education, null, 2),
    },
    {
      name: "certifications.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(certifications, null, 2),
    },
    {
      name: "journey.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(journey, null, 2),
    },
    {
      name: "projects.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(projects, null, 2),
    },
    {
      name: "open-source.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(openSourceProjects, null, 2),
    },
    {
      name: "youtube.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(youtubeContent, null, 2),
    },
    {
      name: "articles.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(articles, null, 2),
    },
    {
      name: "connect.json",
      type: "file",
      icon: <File className="h-4 w-4" />,
      content: JSON.stringify(
        socialPlatforms.map((item) => ({
          name: item.name,
          url: item.url,
          description: item.description,
          followers: item.followers,
          handle: item.handle,
        })),
        null,
        2,
      ),
    },
  ];

  // Theme-aware color tokens
  const colors = isLight
    ? {
        bg: "bg-[#FCFCFC]",
        text: "text-[#1D2770]",
        sidebar: "bg-[#F4F4FF]",
        sidebarBorder: "border-[#D2D8FE]",
        sidebarTitle: "text-[#1D2770]",
        sidebarLabel: "text-[#2837AA]",
        hoverBg: "hover:bg-[#ECEEFF]",
        selectedBg: "bg-[#CDD2FF]/20 text-[#1D2770]",
        tabBar: "bg-[#ECEEFF]",
        tabActive: "bg-[#FCFCFC]",
        tabBorder: "border-[#D2D8FE]",
        editorBg: "bg-[#FCFCFC]",
        editorText: "text-[#2837AA]",
        focusBorder: "focus-within:border-[#1D2770]",
        statusBar: "bg-[#1D2770]",
        folderColor: "text-[#2837AA]",
      }
    : {
        bg: "bg-[#1e1e1e]",
        text: "text-gray-300",
        sidebar: "bg-[#252526]",
        sidebarBorder: "border-[#3e3e42]",
        sidebarTitle: "text-gray-200",
        sidebarLabel: "text-gray-400",
        hoverBg: "hover:bg-muted/50",
        selectedBg: "bg-primary/20 text-primary",
        tabBar: "bg-[#2d2d30]",
        tabActive: "bg-[#1e1e1e]",
        tabBorder: "border-[#3e3e42]",
        editorBg: "bg-[#1e1e1e]",
        editorText: "text-gray-300",
        focusBorder: "focus-within:border-gray-300",
        statusBar: "bg-[#007acc]",
        folderColor: "text-blue-400",
      };

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (nodes: FileNode[], path = "") => {
    return nodes.map((node) => {
      const currentPath = path ? `${path}/${node.name}` : node.name;
      const isExpanded = expandedFolders.has(currentPath);

      return (
        <div key={currentPath} className="select-none">
          <div
            className={`flex items-center py-1 px-2 ${colors.hoverBg} cursor-pointer transition-smooth ${
              selectedFile === currentPath ? colors.selectedBg : ""
            }`}
            onClick={() => {
              if (node.type === "folder") {
                toggleFolder(currentPath);
              } else {
                setSelectedFile(currentPath);
              }
            }}
          >
            <button className="flex items-center space-x-2 flex-1">
              {node.type === "folder" && (
                <span className="transition-smooth">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </span>
              )}

              <span>
                {node.type === "folder" ? (
                  isExpanded ? (
                    <FolderOpen className={`h-4 w-4 ${colors.folderColor}`} />
                  ) : (
                    <Folder className={`h-4 w-4 ${colors.folderColor}`} />
                  )
                ) : (
                  node.icon || <File className="h-4 w-4" />
                )}
              </span>

              <span className="text-sm">{node.name}</span>
            </button>
          </div>

          {node.type === "folder" && isExpanded && node.children && (
            <div className="ml-6 border-l border-border">
              {renderFileTree(node.children, currentPath)}
            </div>
          )}
        </div>
      );
    });
  };

  const getFileContent = (filePath: string): string | JSX.Element => {
    const findFileByPath = (
      nodes: FileNode[],
      pathParts: string[],
    ): FileNode | null => {
      if (!pathParts.length) return null;

      const [currentPart, ...restParts] = pathParts;

      for (const node of nodes) {
        if (node.name === currentPart) {
          if (restParts.length === 0) {
            // This is the target file or folder
            return node.type === "file" ? node : null;
          }

          // Continue traversing inside this folder
          if (node.type === "folder" && node.children) {
            return findFileByPath(node.children, restParts);
          }
        }
      }

      return null;
    };

    const pathParts = filePath.split("/").filter(Boolean); // remove empty parts
    const file = findFileByPath(fileStructure, pathParts);

    if (file?.content) {
      return file?.content;
    }

    if (file?.url) {
      return (
        <img
          src={`images/projects/${file.url}`}
          alt={file.name}
          className="w-full max-w-full h-auto"
        />
      );
    }

    return "File content not available";
  };

  return (
    <div className={`h-screen pt-[90px] ${colors.bg} ${colors.text} font-mono`}>
      <div className="flex h-full flex-col md:flex-row">
        {/* File Explorer Sidebar */}
        <div className={`w-full md:w-80 ${colors.sidebar} border-r ${colors.sidebarBorder} flex flex-col relative z-10 md:z-auto`}>
          <div className={`p-4 border-b ${colors.sidebarBorder}`}>
            <h2 className={`text-sm font-semibold ${colors.sidebarTitle} uppercase tracking-wide`}>
              Explorer
            </h2>
          </div>

          <ScrollArea className="flex-1 p-2">
            <div className={`text-xs ${colors.sidebarLabel} mb-2 px-2`}>
              AHMED SABER PORTFOLIO
            </div>
            {renderFileTree(fileStructure, "")}
          </ScrollArea>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className={`${colors.tabBar} border-b ${colors.tabBorder} flex overflow-x-auto`}>
            <div className={`flex items-center px-2 md:px-4 py-2 ${colors.tabActive} border-r ${colors.tabBorder} text-sm whitespace-nowrap`}>
              <FileText className="h-4 w-4 mr-2" />
              <span className="truncate">{selectedFile}</span>
              {selectedFile !== "README.md" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-4 w-4 p-0 hover:bg-red-500/20 flex-shrink-0"
                  onClick={() => setSelectedFile("README.md")}
                  aria-label={`Close ${selectedFile}`}
                >
                  &times;
                </Button>
              )}
            </div>
          </div>

          {/* File Content */}
          <div className={`flex-1 ${colors.editorBg} overflow-hidden`}>
            <ScrollArea
              className={`h-full border ${colors.focusBorder}`}
              tabIndexable={true}
            >
              <div className="p-3 md:p-6 min-w-max">
                <pre className={`text-xs md:text-sm leading-relaxed ${colors.editorText} whitespace-pre`}>
                  {getFileContent(selectedFile)}
                </pre>
              </div>
            </ScrollArea>
          </div>

          {/* Status Bar */}
          <div className={`${colors.statusBar} text-white px-2 md:px-4 py-1 text-xs flex items-center justify-between`}>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="truncate">Ahmed Saber Portfolio</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Dev Mode</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span>UTF-8</span>
              <span className="hidden md:inline">Markdown</span>
              <span>Ln 1, Col 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMode;
