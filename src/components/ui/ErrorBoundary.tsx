import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portal ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060608] text-[#F8F6F0] flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-white/10 text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-[#FF8A1F] border border-amber-500/30 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-[#F8F6F0]">
              TEMPORARY PORTAL GLITCH
            </h2>

            <p className="text-xs sm:text-sm text-[#A3A5AF] font-inter leading-relaxed">
              We encountered a small hiccup loading this section. Please reload or return to the main portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex-1 py-3 px-4 rounded-xl glass-btn-primary text-[#060608] font-orbitron text-xs font-bold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RELOAD PAGE</span>
              </button>
              <a
                href="#/"
                onClick={() => { this.setState({ hasError: false, error: null }); }}
                className="flex-1 py-3 px-4 rounded-xl glass-panel text-[#F8F6F0] font-orbitron text-xs font-bold inline-flex items-center justify-center gap-2 cursor-pointer hover:border-white/20"
              >
                <Home className="w-4 h-4" />
                <span>GO HOME</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
