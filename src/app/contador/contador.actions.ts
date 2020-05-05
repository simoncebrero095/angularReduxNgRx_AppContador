import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[contador] Incrementar');
export const decrementar = createAction('[contador] Decrementar');
export const multiplicar = createAction('[contador] Multiplicar',
props<{numero: number}>()
);
export const dividir = createAction('[contador] Dividir' ,
props<{numero: number}>()
);
export const reset = createAction('[contador] Reset');