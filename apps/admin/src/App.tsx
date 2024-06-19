import { Button } from '@baas/components-react';
import { plusOne } from '@baas/utils';

function App() {
  return (
    <>
      <h1>{plusOne(11)}</h1>
      <Button />
    </>
  );
}

export default App;
