## 📁 Folder Structure

```
src/
├── features/                    # Feature-based modules
│   ├── drum-machine/           # Drum machine feature
│   │   ├── components/         # Drum machine components
│   │   │   ├── DrumMachine.tsx
│   │   │   ├── drumPad.tsx
│   │   │   └── drumMachine.module.scss
│   │   ├── drumMachineSlice.ts # Redux slice
│   │   ├── drumMachine.functions.ts
│   │   └── index.ts            # Feature exports
│   └── sequencer/              # Sequencer feature
│       ├── components/         # Sequencer components
│       │   ├── Sequencer.tsx
│       │   └── Sequencer.module.scss
│       ├── SequencerSlice.ts   # Redux slice
│       ├── Sequencer.functions.ts
│       └── index.ts            # Feature exports
├── shared/                     # Shared utilities
│   ├── types/                  # TypeScript types
│   │   ├── types.ts
│   │   ├── scss.d.ts
│   │   └── index.ts
│   ├── utils/                  # Shared utilities
│   │   ├── drumMachine.constants.ts
│   │   └── index.ts
│   ├── components/             # Shared components (future)
│   └── hooks/                  # Shared hooks (future)
├── assets/                     # Static assets
│   ├── audio/                  # Audio files
│   └── images/                 # Image files (future)
├── lib/                        # Core libraries
│   ├── store.js               # Redux store
│   └── index.ts
├── App.tsx
├── index.js
└── index.css
```

## 🎯 Key Principles

### **Feature-Based Architecture**

- Each feature (`drum-machine`, `sequencer`) is self-contained
- Features have their own components, state, and business logic
- Clear boundaries between features

### **Shared Resources**

- `shared/types/` - Common TypeScript interfaces
- `shared/utils/` - Utility functions and constants
- `shared/components/` - Reusable UI components (future)
- `shared/hooks/` - Custom React hooks (future)

### **Asset Organization**

- `assets/audio/` - Audio files organized by type
- `assets/images/` - Image assets (future)

### **Clean Imports**

- Each feature exports through `index.ts`
- Shared resources are imported from `shared/`
- Clear import paths: `from './features/drum-machine'`

## 📦 Import Examples

```typescript
// Feature imports
import { DrumMachine } from "./features/drum-machine";
import { Sequencer } from "./features/sequencer";

// Shared imports
import { IState } from "./shared/types";
import { DRUM_HIT_0 } from "./shared/utils";

// Store import
import { store } from "./lib";
```
