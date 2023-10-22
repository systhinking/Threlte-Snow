<script lang="ts">

    export let controls


    // console.log(Object.entries($controls)) 
    
   

    const entries: any = Object.entries($controls)
    const isNotEmpty = entries.length > 0

    const is = {
        number: (value: any) => typeof value === 'number',
        boolean: (value: any) => typeof value === 'boolean',
        text: (value: any) => typeof value === 'string' && !value.startsWith('#'),
        color: (value: any) => typeof value === 'string' && value.startsWith('#'),
        range: (value: any) => typeof value === 'object'
    }

    function updateControls(e: Event){
        let { value, type, dataset, checked, step, min, max} = e.target as HTMLInputElement
       
        let key = dataset.key!

        switch (type) {

            case 'range':
                if(e.type === 'wheel') {

                    let direction = (e as WheelEvent).deltaY < 0 ? 'up' : 'down'

                    if (direction === 'up') {
                        $controls[key].value < max && ($controls[key].value += +step)
                    } else {
                        $controls[key].value > min && ($controls[key].value -= +step)
                    }
                } else {
                    $controls[key].value = +value
                }
            break

            case 'checkbox':
                $controls[key] = checked
            break

            case 'number':
                $controls[key] = +value
            break

            default:
                $controls[key] = +value
            break;
        }


        // console.dir(target);
    }

    let container: HTMLElement;


</script>
<div bind:this={container} >

{#if isNotEmpty}
    <div class="ui">
        {#each entries as [label, value]}
            {#if is.number(value)}
                <label>
                    {label} 
                    <input 
                    on:change={updateControls} 
                    on:wheel={updateControls} 
                    value={$controls[label]} 
                    data-key={label} 
                    type='number' />
                </label>
            {/if}
            {#if is.boolean(value)}
            <label>
                {label}
                <input 
                on:change={updateControls} 
                checked={$controls[label]} 
                data-key={label} 
                type='checkbox' />
            </label>
        {/if}
        {#if is.text(value)}
        <label>
            {label}
            <input 
            on:input={updateControls} 
            value={$controls[label]} 
            data-key={label} 
            type='text' />
        </label>
        {/if}
        {#if is.range(value)}
        <label>
            {label} 
            <input 
            on:input={updateControls} 
            on:wheel={updateControls}
            value={$controls[label].value} 
            min={$controls[label].min} 
            max={$controls[label].max} 
            step={$controls[label].step} 
            data-key={label} 
            type="range" />
        </label>
        {/if}
        {#if is.color(value)}
        <label>
            {label}
            <input 
            on:input={updateControls} 
            {value}
            data-key={label} 
            type='color' />
        </label>
        {/if}

        {/each}
    </div>
{/if}

    

</div>
<style>
    .ui {
        display: grid;
        position: absolute;
        top: 5rem;
        left: 5rem;
        background-color: #0c111d75;
        color: aliceblue;
        padding: 2px;
        font-size: x-small;
        gap: 10px;
        border: 1px solid rgba(255, 255, 255, 0.425);
        border-radius: 5px;
       
        & input:not([type="checkbox"]) {
            width: 80px;
            height: 20px;
            text-align: center;
            cursor: pointer;
        }

        & label {
            display: grid;
            grid-template-columns: repeat(2, .1fr);
            gap: 2rem;
            align-items: center;
            justify-content: space-around;
            font-weight: 500;

        
        }


    
    
    }


  


</style>