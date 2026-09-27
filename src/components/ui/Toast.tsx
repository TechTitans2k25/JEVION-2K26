import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (toast: Omit<ToastMessage, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((newToast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...newToast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <Toast key={t.id} toast={t} onRemove={() => removeToast(t.id)} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

const Toast: React.FC<{ toast: ToastMessage; onRemove: () => void }> = ({ toast, onRemove }) => {
  React.useEffect(() => {
    const timer = setTimeout(onRemove, toast.duration || 5000);
    return () => clearTimeout(timer);
  }, [toast, onRemove]);

  const icons = {
    success: <CheckCircle className="text-green-500" />,
    error: <AlertCircle className="text-red-500" />,
    info: <Info className="text-blue-500" />,
    warning: <AlertTriangle className="text-yellow-500" />
  };

  const borders = {
    success: 'border-green-500/50',
    error: 'border-red-500/50',
    info: 'border-blue-500/50',
    warning: 'border-yellow-500/50'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={`bg-[#151618] border ${borders[toast.type]} rounded-lg p-4 shadow-xl flex items-start space-x-3 pointer-events-auto backdrop-blur-md`}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#F5F2EA] truncate font-orbitron">{toast.title}</h4>
        {toast.message && <p className="text-xs text-[#A9A9A5] mt-1">{toast.message}</p>}
      </div>
      <button
        onClick={onRemove}
        className="flex-shrink-0 text-[#A9A9A5] hover:text-[#F5F2EA] transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

export default Toast;

