<script lang="ts">

    export let controls


    console.log(Object.entries($controls))

    const entries: any = Object.entries($controls)
    const isNotEmpty = entries.length > 0

    const is = {
        number: (value: any) => typeof value === 'number',
        boolean: (value: any) => typeof value === 'boolean',
        text: (value: any) => typeof value === 'string' && !value.startsWith('#') && !value.startsWith('0x'),
        color: (value: any) => typeof value === 'string' && value.startsWith('#') && value.startsWith('0x'),
        range: (value: any) => typeof value === 'object',
        button: (value: any) => typeof value === 'function'
        
    }

    function updateControls(e: Event){
        let { value, type, dataset, checked, step, min, max, popover} = e.target as HTMLInputElement
       
        let key = dataset.key!

        switch (type) {


            case 'checkbox':
                $controls[key] = checked

            break

            case 'number':
                $controls[key] = +value
            
            break

            
            default:
                $controls[key] = value
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
        {#if is.button(value)}
        <label>
            {label}
            <input 
            on:click={updateControls} 
            {value}
            data-key={label} 
            type='button' />
        </label>
        {/if}
        {/each}
    </div>
{/if}

    

</div>
<style>
    .ui {
        display: flex;
        position: fixed;
        background-color: #0C111D;
        color: aliceblue;
        padding: 2px;
        font-size: x-small;
    
    }

    input {
        width: 40px;
       
    }

  


</style>